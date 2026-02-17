package handlers

import (
	"net/http"
	"strings"

	"github.com/aryanthacker/momentum/backend/internal/config"
	"github.com/aryanthacker/momentum/backend/internal/services"
	"github.com/aryanthacker/momentum/backend/utils/response"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

const (
	oauthStateCookieName   = "oauth_state"
	oauthStateCookieMaxAge = 600 // seconds
)

// AuthHandler handles auth-related HTTP requests
type AuthHandler struct {
	cfg         *config.Config
	authService *services.AuthService
}

// NewAuthHandler creates a new AuthHandler
func NewAuthHandler(cfg *config.Config, authService *services.AuthService) *AuthHandler {
	return &AuthHandler{cfg: cfg, authService: authService}
}

// GoogleLogin redirects the user to Google OAuth consent screen and stores state in a cookie
func (h *AuthHandler) GoogleLogin(c *gin.Context) {
	oauthConfig := services.NewGoogleOAuthConfig(h.cfg)
	state := uuid.New().String()

	http.SetCookie(c.Writer, &http.Cookie{
		Name:     oauthStateCookieName,
		Value:    state,
		MaxAge:   oauthStateCookieMaxAge,
		HttpOnly: true,
		Path:     "/",
		Domain:   h.cfg.Auth.CookieDomain,
		Secure:   h.cfg.Auth.CookieSecure,
		SameSite: parseSameSite(h.cfg.Auth.CookieSameSite),
	})

	authURL := oauthConfig.AuthCodeURL(state)
	c.Redirect(http.StatusFound, authURL)
}

// GoogleCallback handles the OAuth callback: validates state, exchanges code,
// sets JWT in HttpOnly cookie, and redirects to frontend dashboard.
func (h *AuthHandler) GoogleCallback(c *gin.Context) {
	cookieState, err := c.Cookie(oauthStateCookieName)
	if err != nil {
		response.BadRequest(c, "Missing oauth_state cookie")
		return
	}

	queryState := c.Query("state")
	if queryState == "" || queryState != cookieState {
		response.BadRequest(c, "Invalid state parameter")
		return
	}

	code := c.Query("code")
	if code == "" {
		response.BadRequest(c, "Missing code parameter")
		return
	}

	_, jwtStr, err := h.authService.HandleGoogleCallback(code)
	if err != nil {
		response.InternalServerError(c, "Authentication failed")
		return
	}

	http.SetCookie(c.Writer, &http.Cookie{
		Name:     h.cfg.Auth.TokenCookieName,
		Value:    jwtStr,
		Path:     "/",
		Domain:   h.cfg.Auth.CookieDomain,
		MaxAge:   h.cfg.Auth.TokenMaxAgeSecond,
		HttpOnly: true,
		Secure:   h.cfg.Auth.CookieSecure,
		SameSite: parseSameSite(h.cfg.Auth.CookieSameSite),
	})

	http.SetCookie(c.Writer, &http.Cookie{
		Name:     oauthStateCookieName,
		Value:    "",
		Path:     "/",
		Domain:   h.cfg.Auth.CookieDomain,
		MaxAge:   -1,
		HttpOnly: true,
		Secure:   h.cfg.Auth.CookieSecure,
		SameSite: parseSameSite(h.cfg.Auth.CookieSameSite),
	})

	c.Redirect(http.StatusTemporaryRedirect, h.cfg.Auth.DashboardURL)
}

func parseSameSite(value string) http.SameSite {
	switch strings.ToLower(strings.TrimSpace(value)) {
	case "strict":
		return http.SameSiteStrictMode
	case "none":
		return http.SameSiteNoneMode
	default:
		return http.SameSiteLaxMode
	}
}
