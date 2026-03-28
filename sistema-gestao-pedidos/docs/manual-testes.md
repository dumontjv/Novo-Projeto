# Roteiro de testes manuais - Sistema de Gestao de Pedidos

## Login
1. Abrir a aplicacao frontend
2. Informar email admin@pedidos.com
3. Informar senha 123456
4. Verificar se o token foi retornado e salvo
5. Verificar se o dashboard carregou sem erro

## Lista de pedidos
1. Confirmar se a tela mostra pedidos iniciais
2. Confirmar se status e prioridades aparecem corretamente
3. Confirmar se o backend responde em GET /api/orders

## Criacao de pedido
1. Enviar um novo pedido com cliente, descricao, valor e prioridade
2. Verificar se o pedido novo aparece na lista
3. Verificar se o status inicial eh NOVO

## Atualizacao de status
1. Atualizar um pedido para ENVIADO
2. Verificar se a lista reflete o novo status
3. Verificar resposta do endpoint PATCH
