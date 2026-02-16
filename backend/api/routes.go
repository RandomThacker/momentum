package api

import (
	v1 "github.com/aryanthacker/momentum/backend/api/v1"
	"github.com/aryanthacker/momentum/backend/business/auth"
	"github.com/aryanthacker/momentum/backend/middlewares"
	"github.com/aryanthacker/momentum/backend/repositories"
	"github.com/aryanthacker/momentum/backend/utils/configs"
	"github.com/aryanthacker/momentum/backend/utils/logger"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

// Router holds all route handlers and dependencies
type Router struct {
	config      *configs.Config
	db          *gorm.DB
	authService *auth.Service
}

// NewRouter creates a new router with all dependencies
func NewRouter(config *configs.Config, db *gorm.DB) *Router {
	// Initialize repositories
	userRepo := repositories.NewUserRepository(db)

	// Initialize services
	authService := auth.NewService(userRepo, config)

	return &Router{
		config:      config,
		db:          db,
		authService: authService,
	}
}

// Setup configures all routes for the application
func (r *Router) Setup(engine *gin.Engine) {
	// Global middlewares
	engine.Use(gin.Recovery())
	engine.Use(logger.GinLogger())
	engine.Use(CORSMiddleware())

	// Health check endpoints (no auth required)
	healthHandler := NewHealthHandler(r.config)
	engine.GET("/health", healthHandler.Health)
	engine.GET("/ready", healthHandler.Ready)
	engine.GET("/live", healthHandler.Live)

	// API v1 routes
	apiV1 := engine.Group("/api/v1")
	r.setupV1Routes(apiV1)
}

// setupV1Routes sets up all v1 API routes
func (r *Router) setupV1Routes(rg *gin.RouterGroup) {
	// Auth handlers
	authHandler := v1.NewAuthHandler(r.authService)

	// Auth routes (public)
	authRoutes := rg.Group("/auth")
	{
		authRoutes.POST("/register", authHandler.Register)
		authRoutes.POST("/login", authHandler.Login)
	}

	// Protected auth routes
	authProtected := rg.Group("/auth")
	authProtected.Use(middlewares.AuthMiddleware(r.authService))
	{
		authProtected.GET("/me", authHandler.GetProfile)
		authProtected.PUT("/me", authHandler.UpdateProfile)
		authProtected.POST("/change-password", authHandler.ChangePassword)
	}

	// Add more route groups here as the application grows
	// Example:
	// r.setupPostRoutes(rg)
	// r.setupScheduleRoutes(rg)
}

// CORSMiddleware handles Cross-Origin Resource Sharing
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
