# Database Schema — Momentum

---

## 1. Overview

Momentum uses **PostgreSQL** as its primary database.

The database is designed to:
- Store structured, relational data
- Support time-based scheduling queries
- Ensure strong data consistency
- Enable safe retries and failure handling

The schema is intentionally simple and normalized to avoid premature complexity.

---

## 2. Core Design Principles

The database design follows these principles:

1. **Relational integrity over flexibility**
2. **Explicit relationships between entities**
3. **Time-based querying support**
4. **Clear separation of concerns**
5. **Schema that evolves incrementally**

---

## 3. Entity Relationship Overview

At a high level, the system models the following relationships:

User
└── Social Account (LinkedIn)
└── Post
└── Job / Execution State


Each entity has a clearly defined responsibility.

---

## 4. Tables

---

## 4.1 users

Stores application-level users.

### Purpose
Represents a single user of Momentum.

### Fields

| Column | Type | Description |
|------|-----|-------------|
| id | UUID (PK) | Unique user identifier |
| email | VARCHAR | User email (unique) |
| password_hash | VARCHAR | Hashed password |
| created_at | TIMESTAMP | Account creation time |
| updated_at | TIMESTAMP | Last update time |

### Notes
- Email is unique
- Passwords are never stored in plain text
- Authentication details may evolve independently

---

## 4.2 social_accounts

Stores connected social media accounts (initially LinkedIn).

### Purpose
Represents OAuth-linked external accounts.

### Fields

| Column | Type | Description |
|------|-----|-------------|
| id | UUID (PK) | Unique account ID |
| user_id | UUID (FK → users.id) | Owner of the account |
| platform | VARCHAR | Platform name (e.g., linkedin) |
| access_token | TEXT | OAuth access token |
| refresh_token | TEXT | OAuth refresh token |
| expires_at | TIMESTAMP | Token expiration |
| created_at | TIMESTAMP | Created time |
| updated_at | TIMESTAMP | Last updated time |

### Notes
- A user can have multiple social accounts
- Tokens are stored securely
- Platform is stored as a string to support future platforms

---

## 4.3 posts

Stores user-created posts to be scheduled.

### Purpose
Represents a piece of content to be published.

### Fields

| Column | Type | Description |
|------|-----|-------------|
| id | UUID (PK) | Post identifier |
| user_id | UUID (FK → users.id) | Owner |
| social_account_id | UUID (FK → social_accounts.id) | Target account |
| content | TEXT | Post text |
| media_url | TEXT | S3 URL (optional) |
| scheduled_at | TIMESTAMP | Desired publish time |
| status | VARCHAR | pending / published / failed |
| created_at | TIMESTAMP | Creation time |
| updated_at | TIMESTAMP | Last update time |

### Notes
- `status` controls execution logic
- `scheduled_at` is indexed for efficient scheduling queries
- Media is stored externally (S3)

---

## 4.4 job_executions (optional but recommended)

Tracks execution attempts for scheduled posts.

### Purpose
Provides observability into scheduling and retries.

### Fields

| Column | Type | Description |
|------|-----|-------------|
| id | UUID (PK) | Execution ID |
| post_id | UUID (FK → posts.id) | Related post |
| attempt | INTEGER | Attempt number |
| status | VARCHAR | success / failed |
| error_message | TEXT | Failure reason (if any) |
| executed_at | TIMESTAMP | Execution time |

### Notes
- Enables debugging and auditability
- Useful for retry and analytics logic
- Can be introduced in later phases if needed

---

## 5. Indexes

Indexes are critical for scheduler performance.

### Recommended Indexes

```sql
CREATE INDEX idx_posts_scheduled_at
ON posts (scheduled_at)
WHERE status = 'pending';

Purpose:

Quickly fetch due posts

Avoid full table scans

Improve scheduler performance

Additional indexes:

users.email

social_accounts.user_id

posts.social_account_id

6. Transactions & Consistency

Certain operations must be transactional, such as:

Publishing a post

Updating post status

Recording execution logs

These operations are wrapped in database transactions to ensure:

All-or-nothing updates

No partial failures

Consistent system state

7. Why This Schema Works Well

This schema:

Matches the problem domain naturally

Keeps data structured and predictable

Supports future platform expansion

Avoids premature denormalization

Enables reliable scheduling

8. Future Extensions

Planned schema enhancements include:

Platform-specific metadata (via JSONB)

Media tables for multi-asset posts

Soft deletes

Analytics and reporting tables

These additions can be layered on without breaking existing data.

9. Summary

The Momentum database schema prioritizes:

Clarity over cleverness

Consistency over flexibility

Simplicity over overengineering

This foundation enables reliable scheduling, safe retries, and long-term evolution of the system.