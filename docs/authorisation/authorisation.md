# Authentication & Authorization — Momentum

---

## 1. Purpose of Authentication

Authentication in Momentum serves two distinct purposes:

1. **Identify users** using the application
2. **Authorize access** to connected social media platforms (LinkedIn)

These concerns are intentionally separated to keep the system secure, flexible, and easy to reason about.

---

## 2. High-Level Auth Model

Momentum uses a **two-layer authentication model**:

1. **Application Authentication**
   - Identifies the user of Momentum
   - Uses email + password
   - Issues JWTs for API access

2. **Platform Authorization (OAuth)**
   - Grants Momentum permission to act on behalf of the user
   - Uses OAuth 2.0 (LinkedIn)
   - Stores access and refresh tokens securely

These layers solve different problems and are handled independently.

---

## 3. Application Authentication (User Auth)

### 3.1 Signup Flow

1. User submits email and password
2. Backend:
   - Validates input
   - Hashes password using a strong hashing algorithm
   - Stores user record in the database
3. User account is created

Passwords are **never stored in plain text**.

---

### 3.2 Login Flow

1. User submits email and password
2. Backend:
   - Verifies credentials
   - Issues a **JWT (JSON Web Token)**

The JWT represents the authenticated user for subsequent API calls.

---

### 3.3 JWT Usage

- JWT is sent by the frontend in the `Authorization` header:
Authorization: Bearer <token>

- Backend middleware:
- Verifies token signature
- Extracts user identity
- Attaches user context to the request

JWTs are:
- Stateless
- Short-lived
- Easy to validate

---

### 3.4 Why JWT?

JWT is chosen because:
- No server-side session storage is required
- Scales easily
- Works well with separate frontend and backend deployments

---

## 4. Authorization Model

Once authenticated:
- Users can only access their own resources
- API endpoints enforce ownership checks
- Cross-user access is explicitly prevented

Authorization rules are enforced at the API layer.

---

## 5. LinkedIn OAuth (Platform Authorization)

### 5.1 Why OAuth?

Momentum needs permission to:
- Publish posts on behalf of the user
- Access user profile details (as required)

OAuth allows this **without sharing user credentials**.

---

### 5.2 OAuth Flow Overview

User → Momentum → LinkedIn
↓
Authorization
↓
User ← Momentum ← Access Token


---

### 5.3 Step-by-Step OAuth Flow

#### Step 1: User Initiates Connection
- User clicks "Connect LinkedIn"
- Backend generates OAuth authorization URL
- User is redirected to LinkedIn

---

#### Step 2: User Grants Permission
- User logs into LinkedIn
- User approves requested permissions
- LinkedIn redirects back to Momentum with an authorization code

---

#### Step 3: Token Exchange
- Backend exchanges authorization code for:
  - Access token
  - Refresh token
- Tokens are stored securely in the database

---

#### Step 4: Account Linked
- Social account is associated with the user
- Momentum can now publish posts on the user's behalf

---

## 6. Token Storage & Security

OAuth tokens are stored with:
- Encryption at rest
- Limited scope
- Expiration tracking

Access tokens:
- Short-lived
- Used for publishing posts

Refresh tokens:
- Used to obtain new access tokens
- Never exposed to the frontend

---

## 7. Token Refresh Strategy

Before publishing a post:
1. Worker checks token expiration
2. If expired:
   - Refresh token is used
   - New access token is stored
3. Publishing proceeds normally

This process is fully backend-managed and invisible to the user.

---

## 8. Separation of Responsibilities

| Component | Responsibility |
|--------|----------------|
| Frontend | Collect credentials, trigger OAuth |
| Backend API | Auth, token issuance, validation |
| Worker | Token refresh, post publishing |
| Database | Secure token storage |

This separation improves security and maintainability.

---

## 9. Failure Handling

Common failure scenarios:
- Invalid credentials
- Expired OAuth tokens
- Revoked permissions
- External API errors

Handling strategy:
- Clear error responses to frontend
- Token refresh attempts when possible
- Logging with context for debugging
- Graceful degradation (no crashes)

---

## 10. Non-Goals (Explicit)

The authentication system does **not** aim to:
- Support social login initially
- Provide SSO
- Handle multi-factor authentication
- Act as an identity provider

These features may be added in future phases if needed.

---

## 11. Future Enhancements

Potential future improvements:
- Password reset flows
- Email verification
- Role-based access control
- Support for additional OAuth providers

These enhancements fit naturally into the existing design.

---

## 12. Summary

Momentum’s authentication system is designed to be:
- Secure by default
- Easy to understand
- Decoupled from platform authorization
- Scalable without complexity

By separating user identity from platform permissions, Momentum maintains clarity, security, and long-term flexibility.
