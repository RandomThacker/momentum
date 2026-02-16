package main

import (
	"fmt"
	"log"

	"github.com/aryanthacker/momentum/backend/api"
	"github.com/aryanthacker/momentum/backend/utils/configs"
	"github.com/aryanthacker/momentum/backend/utils/logger"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	// Load configuration
	config := configs.Load()

	// Initialize logger
	logger.Init(config.App.Environment)
	logger.Infof("Starting %s in %s mode", config.App.Name, config.App.Environment)

	// Set Gin mode
	gin.SetMode(config.Server.Mode)

	// Initialize database
	db, err := initDatabase(config)
	if err != nil {
		logger.Fatal("Failed to connect to database", err)
	}
	logger.Info("Database connection established")

	// Create Gin engine
	engine := gin.New()

	// Setup routes
	router := api.NewRouter(config, db)
	router.Setup(engine)

	// Start server
	addr := fmt.Sprintf(":%s", config.Server.Port)
	logger.Infof("Server starting on %s", addr)

	if err := engine.Run(addr); err != nil {
		logger.Fatal("Failed to start server", err)
	}
}

func initDatabase(config *configs.Config) (*gorm.DB, error) {
	dsn := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=%s",
		config.Database.Host,
		config.Database.Port,
		config.Database.User,
		config.Database.Password,
		config.Database.DBName,
		config.Database.SSLMode,
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	// Auto-migrate models (optional, can be disabled in production)
	// Import models and run migrations here if needed
	// Example: db.AutoMigrate(&models.User{})

	sqlDB, err := db.DB()
	if err != nil {
		return nil, err
	}

	// Set connection pool settings
	sqlDB.SetMaxIdleConns(10)
	sqlDB.SetMaxOpenConns(100)

	// Test connection
	if err := sqlDB.Ping(); err != nil {
		log.Printf("Warning: Database ping failed: %v", err)
		// Don't return error here, allow the app to start
		// The database might become available later
	}

	return db, nil
}
