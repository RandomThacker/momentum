package v1

import (
	"errors"

	"github.com/aryanthacker/momentum/backend/business/auth"
	"github.com/aryanthacker/momentum/backend/middlewares"
	"github.com/aryanthacker/momentum/backend/models"
	"github.com/aryanthacker/momentum/backend/utils/response"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

// AuthHandler handles authentication-related HTTP requests
type AuthHandler struct {
	authService *auth.Service
}

// NewAuthHandler creates a new auth handler
func NewAuthHandler(authService *auth.Service) *AuthHandler {
	return &AuthHandler{authService: authService}
}

// Register handles user registration
// @Summary Register a new user
// @Description Create a new user account
// @Tags auth
// @Accept json
// @Produce json
// @Param input body models.CreateUserInput true "User registration data"
// @Success 201 {object} response.Response{data=models.AuthResponse}
// @Failure 400 {object} response.Response
// @Failure 409 {object} response.Response
// @Router /api/v1/auth/register [post]
func (h *AuthHandler) Register(c *gin.Context) {
	var input models.CreateUserInput
	if err := c.ShouldBindJSON(&input); err != nil {
		response.BadRequest(c, "Invalid input: "+err.Error())
		return
	}

	result, err := h.authService.Register(input)
	if err != nil {
		if errors.Is(err, auth.ErrUserExists) {
			response.Conflict(c, "User with this email already exists")
			return
		}
		response.InternalServerError(c, "Failed to create user")
		return
	}

	response.Created(c, result)
}

// Login handles user login
// @Summary Login user
// @Description Authenticate user and return JWT token
// @Tags auth
// @Accept json
// @Produce json
// @Param input body models.LoginInput true "User login credentials"
// @Success 200 {object} response.Response{data=models.AuthResponse}
// @Failure 400 {object} response.Response
// @Failure 401 {object} response.Response
// @Router /api/v1/auth/login [post]
func (h *AuthHandler) Login(c *gin.Context) {
	var input models.LoginInput
	if err := c.ShouldBindJSON(&input); err != nil {
		response.BadRequest(c, "Invalid input: "+err.Error())
		return
	}

	result, err := h.authService.Login(input)
	if err != nil {
		if errors.Is(err, auth.ErrInvalidCredentials) {
			response.Unauthorized(c, "Invalid email or password")
			return
		}
		if errors.Is(err, auth.ErrUserInactive) {
			response.Forbidden(c, "Account is inactive")
			return
		}
		response.InternalServerError(c, "Login failed")
		return
	}

	response.Success(c, result)
}

// GetProfile returns the current user's profile
// @Summary Get current user profile
// @Description Get the profile of the authenticated user
// @Tags auth
// @Produce json
// @Security BearerAuth
// @Success 200 {object} response.Response{data=models.UserResponse}
// @Failure 401 {object} response.Response
// @Router /api/v1/auth/me [get]
func (h *AuthHandler) GetProfile(c *gin.Context) {
	userID, exists := c.Get(middlewares.UserIDKey)
	if !exists {
		response.Unauthorized(c, "User not authenticated")
		return
	}

	user, err := h.authService.GetUserByID(userID.(uuid.UUID))
	if err != nil {
		if errors.Is(err, auth.ErrUserNotFound) {
			response.NotFound(c, "User not found")
			return
		}
		response.InternalServerError(c, "Failed to get user profile")
		return
	}

	response.Success(c, user.ToResponse())
}

// UpdateProfile updates the current user's profile
// @Summary Update current user profile
// @Description Update the profile of the authenticated user
// @Tags auth
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param input body models.UpdateUserInput true "Profile update data"
// @Success 200 {object} response.Response{data=models.UserResponse}
// @Failure 400 {object} response.Response
// @Failure 401 {object} response.Response
// @Router /api/v1/auth/me [put]
func (h *AuthHandler) UpdateProfile(c *gin.Context) {
	userID, exists := c.Get(middlewares.UserIDKey)
	if !exists {
		response.Unauthorized(c, "User not authenticated")
		return
	}

	var input models.UpdateUserInput
	if err := c.ShouldBindJSON(&input); err != nil {
		response.BadRequest(c, "Invalid input: "+err.Error())
		return
	}

	result, err := h.authService.UpdateProfile(userID.(uuid.UUID), input)
	if err != nil {
		if errors.Is(err, auth.ErrUserNotFound) {
			response.NotFound(c, "User not found")
			return
		}
		response.InternalServerError(c, "Failed to update profile")
		return
	}

	response.SuccessWithMessage(c, "Profile updated successfully", result)
}

// ChangePasswordInput represents the input for changing password
type ChangePasswordInput struct {
	CurrentPassword string `json:"current_password" binding:"required"`
	NewPassword     string `json:"new_password" binding:"required,min=8"`
}

// ChangePassword changes the current user's password
// @Summary Change password
// @Description Change the password of the authenticated user
// @Tags auth
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param input body ChangePasswordInput true "Password change data"
// @Success 200 {object} response.Response
// @Failure 400 {object} response.Response
// @Failure 401 {object} response.Response
// @Router /api/v1/auth/change-password [post]
func (h *AuthHandler) ChangePassword(c *gin.Context) {
	userID, exists := c.Get(middlewares.UserIDKey)
	if !exists {
		response.Unauthorized(c, "User not authenticated")
		return
	}

	var input ChangePasswordInput
	if err := c.ShouldBindJSON(&input); err != nil {
		response.BadRequest(c, "Invalid input: "+err.Error())
		return
	}

	err := h.authService.ChangePassword(userID.(uuid.UUID), input.CurrentPassword, input.NewPassword)
	if err != nil {
		if errors.Is(err, auth.ErrInvalidCredentials) {
			response.Unauthorized(c, "Current password is incorrect")
			return
		}
		if errors.Is(err, auth.ErrUserNotFound) {
			response.NotFound(c, "User not found")
			return
		}
		response.InternalServerError(c, "Failed to change password")
		return
	}

	response.SuccessWithMessage(c, "Password changed successfully", nil)
}
