package services

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/aryanthacker/momentum/backend/internal/config"
	"github.com/aryanthacker/momentum/backend/internal/constants"
	"github.com/aryanthacker/momentum/backend/internal/models"
	"github.com/aryanthacker/momentum/backend/internal/repositories"
	"github.com/golang-jwt/jwt/v5"
	"gorm.io/gorm"
)

const googleUserInfoURL = "https://www.googleapis.com/oauth2/v2/userinfo"

type googleUserInfo struct {
	ID      string `json:"id"`
	Email   string `json:"email"`
	Name    string `json:"name"`
	Picture string `json:"picture"`
}

// AuthService handles auth business logic
type AuthService struct {
	db   *gorm.DB
	cfg  *config.Config
	repo *repositories.UserRepository
}

// NewAuthService creates a new AuthService
func NewAuthService(db *gorm.DB, cfg *config.Config) *AuthService {
	return &AuthService{
		db:   db,
		cfg:  cfg,
		repo: repositories.NewUserRepository(db),
	}
}

// HandleGoogleCallback exchanges code for token, fetches user info, finds or creates user, returns user and JWT
func (s *AuthService) HandleGoogleCallback(code string) (*models.User, string, error) {
	oauthConfig := NewGoogleOAuthConfig(s.cfg)
	token, err := oauthConfig.Exchange(context.Background(), code)
	if err != nil {
		return nil, "", fmt.Errorf("oauth exchange: %w", err)
	}

	req, _ := http.NewRequestWithContext(context.Background(), http.MethodGet, googleUserInfoURL, nil)
	req.Header.Set("Authorization", "Bearer "+token.AccessToken)
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, "", fmt.Errorf("userinfo request: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, "", fmt.Errorf("userinfo status %d", resp.StatusCode)
	}

	var info googleUserInfo
	if err := json.NewDecoder(resp.Body).Decode(&info); err != nil {
		return nil, "", fmt.Errorf("userinfo decode: %w", err)
	}

	user, err := s.repo.FindByProviderAndProviderID(constants.ProviderGoogle, info.ID)
	if err != nil {
		return nil, "", err
	}

	if user == nil {
		user = &models.User{
			Email:      info.Email,
			Name:       info.Name,
			AvatarURL:  info.Picture,
			Provider:   constants.ProviderGoogle,
			ProviderID: info.ID,
			Status:     constants.StatusActive,
		}
		if err := s.repo.Create(user); err != nil {
			return nil, "", err
		}
	}

	claims := jwt.MapClaims{
		"user_id": user.ID.String(),
		"email":   user.Email,
		"exp":     time.Now().Add(24 * time.Hour).Unix(),
	}
	tokenJWT := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	jwtStr, err := tokenJWT.SignedString([]byte(s.cfg.Google.ClientSecret))
	if err != nil {
		return nil, "", fmt.Errorf("jwt sign: %w", err)
	}

	return user, jwtStr, nil
}
