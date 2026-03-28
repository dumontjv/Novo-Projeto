# Backend - Sistema de Gestão de Pedidos

## Requisitos
- Java 21
- Maven 3.9+
- PostgreSQL 16

## Como rodar
1. Suba o banco com Docker Compose na raiz do projeto:
   ```bash
   docker compose up -d
   ```
2. Entre na pasta do backend:
   ```bash
   cd backend
   ```
3. Rode a aplicação:
   ```bash
   mvn spring-boot:run
   ```

## Endpoints principais
- `POST /api/auth/login`
- `GET /api/orders`
- `POST /api/orders`
- `PATCH /api/orders/{id}/status?status=ENVIADO`

## Credenciais demo
- Email: `admin@pedidos.com`
- Senha: `123456`
