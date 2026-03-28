# Dashboard de Faturamento - Guia de Portfolio

## Stack
- Power BI
- SQL

## Objetivo
Construir um dashboard executivo para acompanhamento de faturamento, margem, ticket medio e performance por categoria, cliente, canal e estado.

## Arquivos principais
- `sql/schema.sql`
- `sql/analises.sql`
- `data/faturamento_exemplo.csv`
- `docs/medidas-dax.md`

## KPIs sugeridos
- Receita total
- Custo total
- Margem bruta e margem percentual
- Ticket medio
- Receita por mes
- Top 5 clientes
- Top 5 categorias
- Participacao por canal

## Storytelling do dashboard
1. Visao geral executiva com cards principais
2. Evolucao mensal para detectar crescimento ou queda
3. Comparativo por categoria para enxergar mix rentavel
4. Analise por cliente para identificar concentracao de receita
5. Filtros por estado e canal para tomada de decisao comercial

## Como usar
1. Crie a tabela usando `sql/schema.sql`
2. Importe `data/faturamento_exemplo.csv`
3. Rode as consultas em `sql/analises.sql`
4. Monte as medidas com base em `docs/medidas-dax.md`
