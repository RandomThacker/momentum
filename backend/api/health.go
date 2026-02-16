package api

import (
	"net/http"
	"time"

	"github.com/aryanthacker/momentum/backend/utils/configs"
	"github.com/gin-gonic/gin"
)

// HealthResponse represents the health check response
type HealthResponse struct {
	Status      string `json:"status"`
	Service     string `json:"service"`
	Environment string `json:"environment"`
	Timestamp   string `json:"timestamp"`
}

// HealthHandler handles health check endpoints
type HealthHandler struct {
	config *configs.Config
}

// NewHealthHandler creates a new health handler
func NewHealthHandler(config *configs.Config) *HealthHandler {
	return &HealthHandler{config: config}
}

// Health returns the health status of the service
func (h *HealthHandler) Health(c *gin.Context) {
	c.JSON(http.StatusOK, HealthResponse{
		Status:      "healthy",
		Service:     h.config.App.Name,
		Environment: h.config.App.Environment,
		Timestamp:   time.Now().UTC().Format(time.RFC3339),
	})
}

// Ready returns the readiness status of the service
// This can be extended to check database connections, external services, etc.
func (h *HealthHandler) Ready(c *gin.Context) {
	// TODO: Add database health check
	// TODO: Add external service health checks

	c.JSON(http.StatusOK, gin.H{
		"status":    "ready",
		"service":   h.config.App.Name,
		"timestamp": time.Now().UTC().Format(time.RFC3339),
	})
}

// Live returns the liveness status of the service
func (h *HealthHandler) Live(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"status":    "alive",
		"timestamp": time.Now().UTC().Format(time.RFC3339),
	})
}
