package services

import (
	"github.com/aryanthacker/momentum/backend/internal/config"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

// NewGoogleOAuthConfig returns an OAuth2 config for Google using app config.
func NewGoogleOAuthConfig(cfg *config.Config) *oauth2.Config {
	return &oauth2.Config{
		ClientID:     cfg.Google.ClientID,
		ClientSecret: cfg.Google.ClientSecret,
		RedirectURL:  cfg.Google.RedirectURL,
		Scopes:       []string{"openid", "profile", "email"},
		Endpoint:     google.Endpoint,
	}
}
