package main

import (
	"fmt"

	"github.com/aryanthacker/momentum/backend/internal/config"
	"github.com/aryanthacker/momentum/backend/internal/database"
	"github.com/aryanthacker/momentum/backend/internal/models"
	"github.com/aryanthacker/momentum/backend/internal/routes"
	"github.com/aryanthacker/momentum/backend/utils/logger"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	_ = godotenv.Load()

	cfg := config.Load()
	logger.Init(cfg.App.Env)
	logger.Infof("Starting %s in %s mode", cfg.App.Name, cfg.App.Env)

	db, err := database.NewPostgres(cfg)
	if err != nil {
		logger.Fatal("Failed to connect to database", err)
	}

	if err := db.AutoMigrate(&models.User{}); err != nil {
		logger.Fatal("Failed to auto-migrate User model", err)
	}

	gin.SetMode(cfg.Server.Mode)
	engine := gin.New()
	routes.Setup(engine, cfg, db)

	addr := fmt.Sprintf(":%s", cfg.Server.Port)
	logger.Infof("Server starting on %s", addr)

	if err := engine.Run(addr); err != nil {
		logger.Fatal("Failed to start server", err)
	}
}
