# Medidas DAX sugeridas

## Receita Total
```DAX
Receita Total = SUM(faturamento[receita])
```

## Custo Total
```DAX
Custo Total = SUM(faturamento[custo])
```

## Margem Bruta
```DAX
Margem Bruta = [Receita Total] - [Custo Total]
```

## Margem Percentual
```DAX
Margem % = DIVIDE([Margem Bruta], [Receita Total], 0)
```

## Ticket Medio
```DAX
Ticket Medio = DIVIDE([Receita Total], DISTINCTCOUNT(faturamento[cliente]), 0)
```

## Crescimento Mensal
```DAX
Receita Mes Anterior = CALCULATE([Receita Total], DATEADD('Calendario'[Data], -1, MONTH))
Crescimento Mensal % = DIVIDE([Receita Total] - [Receita Mes Anterior], [Receita Mes Anterior], 0)
```
