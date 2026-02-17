package constants

// Common reusable values
const (
	Empty = ""

	// App environment values
	EnvValueDevelopment = "development"
	EnvValueProduction  = "production"

	// Gin modes
	GinModeDebug   = "debug"
	GinModeRelease = "release"
	GinModeTest    = "test"

	// CORS
	CORSAllowAll = "*"

	// Env file names (for local vs production config)
	EnvFileLocal      = ".env.local"
	EnvFileProduction = ".env.production"
)
