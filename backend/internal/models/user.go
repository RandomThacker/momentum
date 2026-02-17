package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

// User represents a user in the system
type User struct {
	ID         uuid.UUID `gorm:"type:uuid;primaryKey;default:gen_random_uuid()" json:"id"`
	Email      string    `gorm:"type:varchar(255);uniqueIndex;not null" json:"email"`
	Name       string    `gorm:"type:varchar(255);not null" json:"name"`
	AvatarURL  string    `gorm:"type:varchar(500)" json:"avatar_url,omitempty"`
	Provider   string    `gorm:"type:varchar(64);not null;index" json:"provider"`
	ProviderID string    `gorm:"type:varchar(255);not null;index" json:"-"`
	Status     string    `gorm:"type:varchar(20);not null;default:ACTIVE" json:"status"`
	CreatedAt  time.Time `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt  time.Time `gorm:"autoUpdateTime" json:"updated_at"`
}

// TableName specifies the table name for User
func (User) TableName() string {
	return "users"
}

// BeforeCreate ensures UUID is set if not already
func (u *User) BeforeCreate(tx *gorm.DB) error {
	if u.ID == uuid.Nil {
		u.ID = uuid.New()
	}
	return nil
}
