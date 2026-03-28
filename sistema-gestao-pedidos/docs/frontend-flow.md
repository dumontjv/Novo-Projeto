# Fluxo do Frontend - Sistema de Gestão de Pedidos

1. Usuario acessa a tela inicial
2. Frontend envia credenciais para /api/auth/login
3. Token retornado e salvo em localStorage
4. Dashboard busca pedidos em /api/orders
5. Usuario pode criar pedido e atualizar status
6. Erros de autenticacao ou carga devem ser exibidos em tela

## Melhorias planejadas
- formulario real de login
- formulario de criacao de pedidos
- filtros por status e prioridade
- tratamento visual de erro e loading
