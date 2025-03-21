# Realtime Chat

## System Design

| Aspect                | Modular Monolith                                 | Microservices                                   |
|-----------------------|--------------------------------------------------|-------------------------------------------------|
| Simplicity            | Single codebase, easy to set up.                 | Complex setup with multiple services.           |
| Cost-Effectiveness    | Lower costs; fewer resources needed.             | Higher costs due to infrastructure needs.       |
| Flexibility           | Easily adaptable to changing requirements.       | Harder to adapt due to strict service boundaries.|
| Complexity            | Avoids network and distributed system challenges.| Challenges with network latency and consistency. |
| Domain Understanding  | Enables gradual discovery of boundaries.         | Requires upfront understanding of boundaries.   |
| Scalability           | Simple vertical scaling, but with limitations.   | Optimized for horizontal scaling.               |
| Team Collaboration    | Easier for small teams to collaborate.           | Promotes team autonomy with service ownership.  |
| Deployment            | Single deployment pipeline for the whole app.    | Independent pipelines for each service.         |

### Monolith First

> You shouldn't start a new project with microservices, even if you're sure your
> application will be big enough to make it worthwhile. Martin Fowler

### Modular Monolith

A Modular Monolith is a software architecture that structures the application as a single deployment unit
(like a traditional monolith) but organizes its internal components or modules in such a way that they are
loosely coupled and highly cohesive. Each module within the architecture focuses on a specific business
domain or functionality, similar to how microservices operate, but without the distributed system complexity.
This modular design enables seamless extraction of individual module into an independent (micro)service
in the future, should the need arise for greater scalability or distribution.

1. Architecture Overview
Monolithic Backend (Modular)
Use Node.js (main backend) — designed as a modular monolith with clean separation between bounded contexts (e.g., Messaging, Users, Presence).
Use Node.js for WebSocket gateway (real-time communication), forwarding messages to Node.js backend via Kafka or REST.
PostgreSQL for persistent data (users, messages).
Redis for caching and presence tracking (e.g., who’s online).
Kafka for event streaming (e.g., message delivery events, typing indicators).
Docker + Kubernetes for deployment.
2. Modules (Bounded Contexts) – DDD Focus
a. User Module
Register/Login, Profile management
Auth (JWT or session)
Data: users table
b. Chat Module
Chat rooms (private & group), send/receive messages
Message storage, delivery tracking
Data: messages, chat_rooms, participants
c. Presence Module
Online/offline status, typing indicators
Use Redis pub/sub or keys with expiry
d. Notification Module
Real-time updates, push notifications
Consumes events from Kafka (e.g., message_sent, user_typing)
3. System Design Flow
Message Sending Example Flow:
Frontend: React client sends message via WebSocket to Node.js gateway.
Node.js:
Authenticates message (JWT).
Publishes to Kafka topic: chat.message_sent.
Node.js Backend (Modular Monolith):
Kafka consumer picks up event.
Validates & persists to PostgreSQL.
Emits delivery confirmation via Kafka: chat.message_delivered.
Node.js:
Subscribed to chat.message_delivered, forwards it via WebSocket to clients.
4. Tech Stack Roles
Component	Tech	Purpose
Frontend	React + TS	UI, WebSocket client
Real-time Gateway	Node.js	WebSocket server, Kafka producer/consumer
Backend Core	Node.js	Business logic, REST APIs, Kafka consumers, PostgreSQL
Database	PostgreSQL	Persistent storage (messages, users, chats)
Cache/Presence	Redis	Presence tracking, caching user sessions
Messaging Bus	Kafka	Event bus for decoupled communication
Deployment	Docker + K8s	Scalability, container orchestration
Modules (Bounded Contexts) – DDD Focus


### DDD Components

| Component     | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `controller`  | Exposes APIs (REST/WebSocket) to frontend                                   |
| `service`     | Business logic (save messages, notify users, etc.)                         |
| `event`       | Kafka consumers for message events                                         |
| `repository`  | PostgreSQL access (via Spring Data JPA)                                    |
| `model`       | Entities mapped to DB (e.g., Message)                                      |
| `dto`         | Data Transfer Objects (incoming/outgoing data)                             |



### 🎉 Features
- **Real-time messaging**
- **File transfer**
- **User block**
- **Responsive UI**
- **User Authentication**
