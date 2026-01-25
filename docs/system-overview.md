# Momentum — System Overview
**Tagline:** Consistency compounds.

---

## 1. What is Momentum?

Momentum is a social media scheduling platform designed to help individuals and businesses stay consistent with their online presence.

The core idea behind Momentum is simple:
> Consistency matters more than intensity.

Instead of logging in every day to manually post content, users can plan their posts in advance and let Momentum handle publishing them at the right time.

Momentum initially focuses on **LinkedIn scheduling**, with plans to expand to additional platforms (YouTube, Instagram) in later phases.

---

## 2. Goals of the System

### Primary Goals
- Allow users to schedule posts for future publishing
- Ensure posts are published reliably at the correct time
- Handle failures gracefully (retries, error visibility)
- Keep the system simple, predictable, and maintainable

### Learning Goals (Engineering-Focused)
This project is also designed to deeply explore:
- Backend system design
- Asynchronous job processing
- Cloud infrastructure (AWS)
- Observability and logging
- Cost-aware architectural decisions

---

## 3. Non-Goals

To avoid unnecessary complexity, Momentum explicitly does **not** aim to:
- Be a full social media analytics platform
- Support real-time collaboration
- Provide advanced marketing insights
- Implement microservices in early phases
- Optimize for massive scale initially

These decisions are intentional and help keep the system focused and understandable.

---

## 4. High-Level Architecture

At a high level, Momentum is composed of four major parts:

1. **Frontend** – User interface for scheduling posts
2. **Backend API** – Core business logic
3. **Asynchronous Worker** – Executes scheduled jobs
4. **Cloud Infrastructure** – Storage, database, queue, and logs

### High-Level Flow

User → Frontend → Backend API → Database
↓
Queue
↓
Worker → External Platform (LinkedIn)


This separation ensures that:
- User requests remain fast
- Scheduling logic is reliable
- Failures do not impact user experience

---

## 5. Technology Choices & Reasoning

### Frontend
- **Next.js (TypeScript)**
- Deployed independently from the backend

The frontend is intentionally kept simple. Its primary responsibility is collecting user input and communicating with the backend API.

---

### Backend
- **Go** with **Gin**
- REST-based API design

Go is chosen for:
- Strong concurrency model
- Predictable performance
- Clear error handling
- Production readiness

Gin provides lightweight routing without hiding core Go concepts.

---

### Database
- **PostgreSQL**

PostgreSQL is used because Momentum relies heavily on:
- Structured data
- Relationships (users, accounts, posts)
- Time-based queries
- Strong consistency and transactions

These characteristics align naturally with a relational database.

---

### Queue
- **AWS SQS**

SQS is used to handle scheduled publishing jobs asynchronously.

This avoids:
- Cron jobs running inside API servers
- Tight coupling between scheduling and request handling
- Reliability issues during restarts or deployments

---

### Storage
- **AWS S3**

S3 is used to store media assets (images, videos) securely and cost-effectively.

Media is uploaded directly from the frontend using pre-signed URLs, keeping the backend lightweight.

---

### Logging & Observability
- **CloudWatch or Loki + Grafana**

Logs are treated as first-class citizens and are essential for:
- Debugging failures
- Understanding system behavior
- Observing background job execution

The logging approach is intentionally flexible to support both managed and open-source solutions.

---

## 6. Deployment Model

Although the codebase is organized as a **monorepo**, components are deployed independently:

- Frontend → Deployed separately (e.g., Vercel or CDN-based hosting)
- Backend API → Runs on AWS EC2
- Worker → Runs as a separate process or service

Monorepo organization improves clarity and coordination without coupling deployments.

---

## 7. Reliability & Failure Handling

Momentum is designed with the assumption that:
- Servers can crash
- Network calls can fail
- External APIs can be unreliable

Key strategies:
- Asynchronous job execution
- Retries via queue mechanisms
- Explicit job status tracking
- Centralized logging

The system prioritizes **correctness and reliability over speed**.

---

## 8. Cost Awareness

All infrastructure decisions are made with cost awareness in mind.

The system is designed to:
- Stay within free tiers where possible
- Scale costs linearly with usage
- Avoid unnecessary managed services early

This ensures Momentum remains sustainable as a personal project and early-stage product.

---

## 9. Future Roadmap (High-Level)

Planned future phases include:
- YouTube scheduling
- Instagram scheduling
- Media-heavy workflows
- Improved retry and idempotency handling
- Enhanced observability and metrics

Each phase will build incrementally on the existing architecture.

---

## 10. Summary

Momentum is intentionally designed to be:
- Simple, not simplistic
- Reliable, not overengineered
- Educational, yet production-minded

The architecture emphasizes clarity, correctness, and long-term maintainability while keeping costs and complexity under control.
