package routes

import (
	"github.com/aryanthacker/momentum/backend/internal/config"
	"github.com/aryanthacker/momentum/backend/internal/constants"
	"github.com/aryanthacker/momentum/backend/internal/handlers"
	"github.com/aryanthacker/momentum/backend/internal/middleware"
	"github.com/aryanthacker/momentum/backend/internal/services"
	"github.com/aryanthacker/momentum/backend/utils/logger"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

// Setup registers all routes and middleware on the engine
func Setup(engine *gin.Engine, cfg *config.Config, db *gorm.DB) {
	engine.Use(gin.Recovery())
	engine.Use(logger.GinLogger())
	engine.Use(middleware.CORS(cfg.CORS.AllowedOrigins))

	healthHandler := handlers.NewHealthHandler(cfg)
	engine.GET(constants.Health, healthHandler.Health)
	engine.GET(constants.Ready, healthHandler.Ready)
	engine.GET(constants.Live, healthHandler.Live)

	authService := services.NewAuthService(db, cfg)
	authHandler := handlers.NewAuthHandler(cfg, authService)
	engine.GET(constants.GoogleLogin, authHandler.GoogleLogin)
	engine.GET(constants.GoogleCallback, authHandler.GoogleCallback)
}
