package constants

// Environment variable names (use with os.Getenv or config)
const (
	EnvServerPort  = "SERVER_PORT"
	EnvPort        = "PORT"
	EnvGinMode     = "GIN_MODE"
	EnvDBURL       = "DB_URL"
	EnvAppName     = "APP_NAME"
	EnvAppEnv      = "APP_ENV"
	EnvAppBaseURL  = "APP_BASE_URL"
	EnvCORSOrigins = "CORS_ALLOWED_ORIGINS"
	EnvGoogleClientID     = "GOOGLE_CLIENT_ID"
	EnvGoogleClientSecret = "GOOGLE_CLIENT_SECRET"
	EnvGoogleRedirectURL  = "GOOGLE_REDIRECT_URL"

	EnvFrontendDashboardURL         = "FRONTEND_DASHBOARD_URL"
	EnvAuthCookieDomain             = "AUTH_COOKIE_DOMAIN"
	EnvAuthCookieSecure             = "AUTH_COOKIE_SECURE"
	EnvAuthCookieSameSite           = "AUTH_COOKIE_SAME_SITE"
	EnvAuthTokenCookieName          = "AUTH_TOKEN_COOKIE_NAME"
	EnvAuthTokenCookieMaxAgeSeconds = "AUTH_TOKEN_COOKIE_MAX_AGE_SECONDS"
)
