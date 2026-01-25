# Scheduler Design — Momentum

---

## 1. Purpose of the Scheduler

The scheduler is the heart of Momentum.

Its responsibility is to:
- Publish user-created posts at a specific future time
- Do so **reliably**, even if servers restart or fail
- Ensure user-facing APIs remain fast and responsive

The scheduler is intentionally designed as an **asynchronous system**, separate from user request handling.

---

## 2. Core Design Principles

The scheduler is built around the following principles:

1. **Reliability over simplicity**
2. **Asynchronous execution**
3. **Failure tolerance**
4. **Clear separation of responsibilities**
5. **No time-based logic inside the API server**

These principles guide all architectural decisions described below.

---

## 3. Why Not Cron Jobs?

A common beginner approach to scheduling is to run cron jobs inside the API server.

This approach was intentionally avoided due to several limitations:

- Cron jobs stop if the server restarts or crashes
- Scaling the API horizontally causes duplicate executions
- Cron-based polling introduces unnecessary database load
- Failures are hard to observe and retry safely

In contrast, Momentum uses **event-driven scheduling**, which is more reliable and production-safe.

---

## 4. High-Level Scheduler Architecture

The scheduler consists of three main components:

1. **API Server**
2. **Queue (AWS SQS)**
3. **Worker Process**

### Architecture Flow

User → API Server → Database
↓
Queue
↓
Worker → LinkedIn API


Each component has a clearly defined responsibility, ensuring the system remains simple and maintainable.

---

## 5. Scheduling Flow (Step-by-Step)

### Step 1: User Schedules a Post

When a user schedules a post:
- The API validates input
- The post is stored in the database with:
  - Content
  - Media references
  - Scheduled time
  - Status = `pending`

At this stage, **no publishing logic is executed**.

---

### Step 2: Job is Created

After saving the post:
- A scheduling job is created
- A message is pushed to the queue containing:
  - Post ID
  - Scheduled execution time
  - Retry metadata

This decouples scheduling from request handling.

---

### Step 3: Worker Picks Up Job

The worker process:
- Polls the queue continuously
- Receives jobs when they become visible
- Checks if the scheduled time has been reached

If the job is not yet due:
- The job is delayed or re-queued
- No busy waiting or polling loops occur

---

### Step 4: Post is Published

Once the scheduled time is reached:
- The worker fetches post details from the database
- Media is retrieved from storage if required
- The post is published to the external platform (LinkedIn)

On success:
- Post status is updated to `published`
- Execution logs are recorded

---

### Step 5: Failure Handling

If publishing fails:
- The job is retried based on configured retry limits
- Errors are logged with context
- After repeated failures, the job is marked as `failed`

Failures do **not** block other jobs.

---

## 6. Why Use a Queue?

The queue plays a critical role in system reliability.

Using a queue allows Momentum to:
- Retry failed jobs automatically
- Absorb traffic spikes gracefully
- Prevent data loss during crashes
- Decouple execution from user requests

Queues act as a **buffer** between intent (scheduling) and execution (publishing).

---

## 7. Worker Design

The worker is a standalone process with a single responsibility:
> Execute scheduled jobs safely and reliably.

Key characteristics:
- Stateless
- Restart-safe
- Horizontally scalable
- Independent from the API server

Multiple workers can run simultaneously without interfering with each other.

---

## 8. Job Idempotency

To prevent duplicate publishing:
- Each job references a single post ID
- The worker checks post status before execution
- Already published posts are skipped

This ensures safe retries without side effects.

---

## 9. Observability & Logging

Every job execution is logged with:
- Post ID
- Scheduled time
- Execution time
- Success or failure status
- Error details (if any)

Logs enable:
- Debugging failures
- Understanding system behavior
- Improving retry strategies

---

## 10. Design Trade-offs

### Chosen Approach
- Queue-based asynchronous scheduling
- Dedicated worker process
- Explicit job tracking

### Trade-offs
- Slightly more infrastructure
- More moving parts

These trade-offs are accepted in exchange for:
- Reliability
- Predictability
- Production-grade behavior

---

## 11. Future Improvements

Planned enhancements include:
- Delayed queues with native scheduling support
- Dead-letter queues for failed jobs
- Backoff-based retry strategies
- Platform-specific workers

These improvements build on the existing design without requiring major rewrites.

---

## 12. Summary

The scheduler in Momentum is designed to be:
- Reliable under failure
- Easy to reason about
- Safe to scale
- Simple to extend

By avoiding cron-based scheduling and embracing asynchronous job execution, Momentum ensures that **consistency truly compounds**.
