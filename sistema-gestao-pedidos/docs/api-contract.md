# Contrato da API - Sistema de Gestão de Pedidos

## POST /api/auth/login
### Request
{
  "email": "admin@pedidos.com",
  "password": "123456"
}

### Response
{
  "token": "jwt-ou-token-demo"
}

## GET /api/orders
### Headers
Authorization: Bearer <token>

### Response
Lista de pedidos com cliente, descricao, valor, status, prioridade e data de criacao.

## POST /api/orders
### Headers
Authorization: Bearer <token>

### Request
{
  "customerName": "Loja Aurora",
  "description": "50 camisetas personalizadas",
  "totalAmount": 4200,
  "priority": "Alta"
}

## PATCH /api/orders/{id}/status?status=ENVIADO
### Headers
Authorization: Bearer <token>
