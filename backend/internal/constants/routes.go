package constants

const (
	APIBase = "/api/v1"

	// Health endpoints
	Health = "/health"
	Ready  = "/ready"
	Live   = "/live"

	// Auth endpoints (for future use)
	AuthBase       = APIBase + "/auth"
	GoogleLogin    = AuthBase + "/google/login"
	GoogleCallback = AuthBase + "/google/callback"

	// Scheduler base (future)
	PostsBase = APIBase + "/posts"
)
