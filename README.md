# Momentum

A production-ready monorepo containing a Next.js frontend and a Go (Gin) backend.

## Project Structure

- **frontend/**: Next.js 14+ application with TypeScript and Tailwind CSS.
- **backend/**: Go API server using the Gin framework.
- **docs/**: Documentation and design specs.

## Getting Started

### Prerequisites

- Node.js (v18+)
- Go (v1.21+)

### Setup

1. **Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

2. **Backend**:
   ```bash
   cd backend
   go mod download
   go run cmd/server/main.go
   ```
