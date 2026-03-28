# Backend - Plataforma de Agendamentos

## Requisitos
- Java 21
- Maven 3.9+
- MySQL 8

## Como rodar
1. Suba o banco com Docker Compose na raiz do projeto
2. Entre na pasta backend
3. Execute mvn spring-boot:run

## Endpoints principais
- GET /api/appointments
- POST /api/appointments

## WebSocket
- Endpoint: /ws-notifications
- Topico: /topic/appointments
