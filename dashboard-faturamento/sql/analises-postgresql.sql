SELECT TO_CHAR(data_venda, 'YYYY-MM') AS mes, SUM(receita) AS receita_total
FROM faturamento
GROUP BY TO_CHAR(data_venda, 'YYYY-MM')
ORDER BY mes;

SELECT categoria,
       SUM(receita) AS receita_total,
       SUM(custo) AS custo_total,
       SUM(receita - custo) AS margem_bruta,
       ROUND((SUM(receita - custo) / NULLIF(SUM(receita), 0)) * 100, 2) AS margem_percentual
FROM faturamento
GROUP BY categoria
ORDER BY receita_total DESC;

SELECT cliente, SUM(receita) AS receita_total
FROM faturamento
GROUP BY cliente
ORDER BY receita_total DESC
LIMIT 5;

SELECT canal, estado, SUM(receita) AS receita_total
FROM faturamento
GROUP BY canal, estado
ORDER BY receita_total DESC;
