package config

import (
	"log"
	"os"
	"strconv"
	"strings"

	"github.com/aryanthacker/momentum/backend/internal/constants"
	"github.com/joho/godotenv"
)

// Config holds all configuration for the application (12-factor: env only)
type Config struct {
	Server   ServerConfig
	Database DatabaseConfig
	App      AppConfig
	CORS     CORSConfig
	Google   GoogleConfig
	Auth     AuthConfig
}

// ServerConfig holds server-related configuration
type ServerConfig struct {
	Port string
	Mode string
}

// DatabaseConfig holds database-related configuration
type DatabaseConfig struct {
	URL string
}

// AppConfig holds application-related configuration
type AppConfig struct {
	Name    string
	Env     string
	BaseURL string
}

// CORSConfig holds CORS-related configuration
type CORSConfig struct {
	AllowedOrigins []string
}

// GoogleConfig holds Google OAuth-related configuration
type GoogleConfig struct {
	ClientID     string
	ClientSecret string
	RedirectURL  string
}

// AuthConfig holds auth and cookie settings.
type AuthConfig struct {
	DashboardURL      string
	CookieDomain      string
	CookieSecure      bool
	CookieSameSite    string
	TokenCookieName   string
	TokenMaxAgeSecond int
}

var cfg *Config

// LoadLocal loads only .env.local (single source for local). No .env is loaded so commenting a var in .env.local means it is missing.
func LoadLocal() *Config {
	_ = godotenv.Load(constants.EnvFileLocal)
	return load()
}

// LoadProduction loads only .env.production (single source for production). No .env is loaded.
func LoadProduction() *Config {
	_ = godotenv.Load(constants.EnvFileProduction)
	return load()
}

// Load initializes the configuration from environment variables only (no defaults).
// Call LoadLocal() or LoadProduction() instead so the correct env file is loaded first.
func Load() *Config {
	if cfg != nil {
		return cfg
	}
	return load()
}

// load builds Config from current environment (no env file loading).
func load() *Config {
	if cfg != nil {
		return cfg
	}
	cfg = &Config{
		Server: ServerConfig{
			Port: getEnv(constants.EnvServerPort, getEnv(constants.EnvPort, constants.Empty)),
			Mode: getEnv(constants.EnvGinMode, constants.Empty),
		},
		Database: DatabaseConfig{
			URL: mustGetEnv(constants.EnvDBURL),
		},
		App: AppConfig{
			Name:    getEnv(constants.EnvAppName, constants.Empty),
			Env:     getEnv(constants.EnvAppEnv, constants.Empty),
			BaseURL: getEnv(constants.EnvAppBaseURL, constants.Empty),
		},
		CORS: CORSConfig{
			AllowedOrigins: parseCORSOrigins(getEnv(constants.EnvCORSOrigins, constants.Empty)),
		},
		Google: GoogleConfig{
			ClientID:     getEnv(constants.EnvGoogleClientID, constants.Empty),
			ClientSecret: getEnv(constants.EnvGoogleClientSecret, constants.Empty),
			RedirectURL:  getEnv(constants.EnvGoogleRedirectURL, constants.Empty),
		},
		Auth: AuthConfig{
			DashboardURL:      getEnv(constants.EnvFrontendDashboardURL, buildDashboardURL(getEnv(constants.EnvAppBaseURL, constants.Empty))),
			CookieDomain:      getEnv(constants.EnvAuthCookieDomain, constants.Empty),
			CookieSecure:      getEnvAsBool(constants.EnvAuthCookieSecure, getEnv(constants.EnvAppEnv, constants.Empty) == constants.EnvValueProduction),
			CookieSameSite:    getEnv(constants.EnvAuthCookieSameSite, "Lax"),
			TokenCookieName:   getEnv(constants.EnvAuthTokenCookieName, "auth_token"),
			TokenMaxAgeSecond: getEnvAsInt(constants.EnvAuthTokenCookieMaxAgeSeconds, 24*60*60),
		},
	}

	return cfg
}

// Get returns the current configuration
func Get() *Config {
	if cfg == nil {
		return Load()
	}
	return cfg
}

// getEnv returns the environment variable value or fallback
func getEnv(key string, fallback string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return fallback
}

// mustGetEnv returns the environment variable value or exits with log.Fatal if missing or empty
func mustGetEnv(key string) string {
	value, exists := os.LookupEnv(key)
	if !exists || strings.TrimSpace(value) == constants.Empty {
		log.Fatalf("Missing required environment variable: %s", key)
	}
	return value
}

// parseCORSOrigins splits a comma-separated string and trims each part; empty env yields empty slice
func parseCORSOrigins(value string) []string {
	if value == constants.Empty {
		return nil
	}
	parts := strings.Split(value, ",")
	origins := make([]string, 0, len(parts))
	for _, p := range parts {
		trimmed := strings.TrimSpace(p)
		if trimmed != constants.Empty {
			origins = append(origins, trimmed)
		}
	}
	return origins
}

func getEnvAsBool(key string, fallback bool) bool {
	value, exists := os.LookupEnv(key)
	if !exists {
		return fallback
	}
	parsed, err := strconv.ParseBool(strings.TrimSpace(value))
	if err != nil {
		return fallback
	}
	return parsed
}

func getEnvAsInt(key string, fallback int) int {
	value, exists := os.LookupEnv(key)
	if !exists {
		return fallback
	}
	parsed, err := strconv.Atoi(strings.TrimSpace(value))
	if err != nil {
		return fallback
	}
	return parsed
}

func buildDashboardURL(baseURL string) string {
	baseURL = strings.TrimSpace(baseURL)
	if baseURL == constants.Empty {
		return "/dashboard"
	}
	return strings.TrimRight(baseURL, "/") + "/dashboard"
}
