package middleware

import (
	"strings"

	"github.com/aryanthacker/momentum/backend/internal/constants"
	"github.com/gin-gonic/gin"
)

// CORS sets Cross-Origin Resource Sharing headers using allowed origins from config
func CORS(allowedOrigins []string) gin.HandlerFunc {
	return func(c *gin.Context) {
		origin := c.Request.Header.Get("Origin")
		allowOrigin := constants.Empty

		for _, o := range allowedOrigins {
			if o == constants.CORSAllowAll {
				allowOrigin = constants.CORSAllowAll
				break
			}
			if origin != constants.Empty && strings.EqualFold(o, origin) {
				allowOrigin = origin
				break
			}
		}

		if allowOrigin != constants.Empty {
			c.Writer.Header().Set("Access-Control-Allow-Origin", allowOrigin)
		}
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers",
			"Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
