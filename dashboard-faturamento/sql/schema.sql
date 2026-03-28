CREATE TABLE faturamento (
    id SERIAL PRIMARY KEY,
    data_venda DATE NOT NULL,
    cliente VARCHAR(120) NOT NULL,
    categoria VARCHAR(80) NOT NULL,
    produto VARCHAR(120) NOT NULL,
    quantidade INT NOT NULL,
    receita NUMERIC(12,2) NOT NULL,
    custo NUMERIC(12,2) NOT NULL,
    canal VARCHAR(50) NOT NULL,
    estado VARCHAR(2) NOT NULL
);
