package database

import (
	"github.com/aryanthacker/momentum/backend/internal/config"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// NewPostgres creates a GORM DB connection using DB_URL from config
func NewPostgres(cfg *config.Config) (*gorm.DB, error) {
	db, err := gorm.Open(postgres.Open(cfg.Database.URL), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	sqlDB, err := db.DB()
	if err != nil {
		return nil, err
	}

	sqlDB.SetMaxIdleConns(10)
	sqlDB.SetMaxOpenConns(100)

	return db, nil
}
