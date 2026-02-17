package handlers

import (
	"net/http"
	"time"

	"github.com/aryanthacker/momentum/backend/internal/config"
	"github.com/gin-gonic/gin"
)

// HealthHandler handles health check endpoints
type HealthHandler struct {
	config *config.Config
}

// NewHealthHandler creates a new HealthHandler
func NewHealthHandler(config *config.Config) *HealthHandler {
	return &HealthHandler{config: config}
}

// Health returns the health status of the service
func (h *HealthHandler) Health(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"status":      "healthy",
		"service":     h.config.App.Name,
		"environment": h.config.App.Env,
		"timestamp":   time.Now().UTC().Format(time.RFC3339),
	})
}

// Ready returns readiness (can be extended for DB checks)
func (h *HealthHandler) Ready(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"status":    "ready",
		"service":   h.config.App.Name,
		"timestamp": time.Now().UTC().Format(time.RFC3339),
	})
}

// Live returns liveness
func (h *HealthHandler) Live(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"status":    "alive",
		"timestamp": time.Now().UTC().Format(time.RFC3339),
	})
}
