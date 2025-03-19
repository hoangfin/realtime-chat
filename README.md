# 🚀 **Project Launching Soon**

![Coming Soon](https://media.istockphoto.com/id/1310496929/vector/coming-soon-label.jpg?s=612x612&w=0&k=20&c=Jt9nyCzsOv0NHj1x2i94MlkZKkuclmY2oT78r4c25zY=)

---

### 🙏 **Thank You for Stopping By!**
I’m working hard to bring this project to life and can't wait to share it with you ❤️<br />
In the meantime, feel free to explore the source code if you're interested.<br />
Your feedback and contributions are always welcome.

1. Architecture Overview
Monolithic Backend (Modular)
Use Kotlin (main backend) — designed as a modular monolith with clean separation between bounded contexts (e.g., Messaging, Users, Presence).
Use Node.js for WebSocket gateway (real-time communication), forwarding messages to Kotlin backend via Kafka or REST.
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
Kotlin Backend (Modular Monolith):
Kafka consumer picks up event.
Validates & persists to PostgreSQL.
Emits delivery confirmation via Kafka: chat.message_delivered.
Node.js:
Subscribed to chat.message_delivered, forwards it via WebSocket to clients.
4. Tech Stack Roles
Component	Tech	Purpose
Frontend	React + TS	UI, WebSocket client
Real-time Gateway	Node.js	WebSocket server, Kafka producer/consumer
Backend Core	Kotlin	Business logic, REST APIs, Kafka consumers, PostgreSQL
Database	PostgreSQL	Persistent storage (messages, users, chats)
Cache/Presence	Redis	Presence tracking, caching user sessions
Messaging Bus	Kafka	Event bus for decoupled communication
Deployment	Docker + K8s	Scalability, container orchestration
Modules (Bounded Contexts) – DDD Focus


### Component Explanations

| Component     | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `controller`  | Exposes APIs (REST/WebSocket) to frontend                                   |
| `service`     | Business logic (save messages, notify users, etc.)                         |
| `event`       | Kafka consumers for message events                                         |
| `repository`  | PostgreSQL access (via Spring Data JPA)                                    |
| `model`       | Entities mapped to DB (e.g., Message)                                      |
| `dto`         | Data Transfer Objects (incoming/outgoing data)                             |



### 🎉 **What to Expect**
- **Real-time chat**
- **File transfer**
- **User block**
- **Responsive UI**
- **User authentication and registration**
