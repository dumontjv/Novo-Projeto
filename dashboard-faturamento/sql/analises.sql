SELECT DATE_FORMAT(data_venda, '%Y-%m') AS mes, SUM(receita) AS receita_total
FROM faturamento
GROUP BY DATE_FORMAT(data_venda, '%Y-%m')
ORDER BY mes;

SELECT categoria, SUM(receita) AS receita_total, SUM(custo) AS custo_total,
       SUM(receita - custo) AS margem_bruta
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
