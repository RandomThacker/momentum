package config

import (
	"os"
	"strings"
)

// Config holds all configuration for the application (12-factor: env only)
type Config struct {
	Server   ServerConfig
	Database DatabaseConfig
	App      AppConfig
	CORS     CORSConfig
	Google   GoogleConfig
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

var cfg *Config

// Load initializes the configuration from environment variables
func Load() *Config {
	if cfg != nil {
		return cfg
	}

	cfg = &Config{
		Server: ServerConfig{
			Port: getEnv("SERVER_PORT", getEnv("PORT", "8080")),
			Mode: getEnv("GIN_MODE", "debug"),
		},
		Database: DatabaseConfig{
			URL: getEnv("DB_URL", "postgres://localhost:5432/momentum_dev?sslmode=disable"),
		},
		App: AppConfig{
			Name:    getEnv("APP_NAME", "Momentum"),
			Env:     getEnv("APP_ENV", "development"),
			BaseURL: getEnv("APP_BASE_URL", ""),
		},
		CORS: CORSConfig{
			AllowedOrigins: parseCORSOrigins(getEnv("CORS_ALLOWED_ORIGINS", "*")),
		},
		Google: GoogleConfig{
			ClientID:     getEnv("GOOGLE_CLIENT_ID", ""),
			ClientSecret: getEnv("GOOGLE_CLIENT_SECRET", ""),
			RedirectURL:  getEnv("GOOGLE_REDIRECT_URL", ""),
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

// parseCORSOrigins splits a comma-separated string, trims each part; if empty returns ["*"]
func parseCORSOrigins(value string) []string {
	parts := strings.Split(value, ",")
	origins := make([]string, 0, len(parts))
	for _, p := range parts {
		trimmed := strings.TrimSpace(p)
		if trimmed != "" {
			origins = append(origins, trimmed)
		}
	}
	if len(origins) == 0 {
		return []string{"*"}
	}
	return origins
}
