# Modelagem no Power BI

## Tabela fato
Use `faturamento` como tabela fato principal.

## Tabela calendario
Crie uma tabela calendario ligada a `faturamento[data_venda]`.
Exemplo DAX:

```DAX
Calendario = CALENDAR(MIN(faturamento[data_venda]), MAX(faturamento[data_venda]))
```

Adicione colunas auxiliares:
- Ano
- Mes Numero
- Mes Nome
- AnoMes
- Trimestre

## Relacionamentos
- Calendario[Data] -> faturamento[data_venda]

## Segmentadores recomendados
- AnoMes
- Canal
- Estado
- Categoria
- Cliente

## Boas praticas
- Formatar moeda em Real brasileiro
- Ordenar nome do mes pelo numero do mes
- Separar medidas em uma tabela de medidas
- Evitar excesso de visuais por pagina
