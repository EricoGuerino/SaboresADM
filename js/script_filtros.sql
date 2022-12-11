--TABELA CATEGORIA
BEGIN;
CREATE TABLE categoria (
    id INTEGER GENERATED BY DEFAULT AS IDENTITY,
    descricao VARCHAR(255),
    valor DOUBLE,
    PRIMARY KEY (id)
);
INSERT INTO categoria (id,descricao) VALUES (1,"Doces");
INSERT INTO categoria (id,descricao) VALUES (2,"Diet");
INSERT INTO categoria (id,descricao) VALUES (3,"Zero Açucar");
INSERT INTO categoria (id,descricao) VALUES (4,"Sem Adição de Açúcar");
INSERT INTO categoria (id,descricao) VALUES (5,"Enriquecido com Proteínas");
INSERT INTO categoria (id,descricao) VALUES (6,"Sem Lactose");
INSERT INTO categoria (id,descricao) VALUES (7,"Sem Glúten");
INSERT INTO categoria (id,descricao) VALUES (8,"Vegano");
--TABELA FABRICANTE
CREATE TABLE fabricante (
    id INTEGER GENERATED BY DEFAULT AS IDENTITY,
    descricao VARCHAR(255),
    valor DOUBLE,
    PRIMARY KEY (id)
);
INSERT INTO fabricante (id,descricao) VALUES (1, "Haribol", null);
INSERT INTO fabricante (id,descricao) VALUES (2, "Famoso", null);
INSERT INTO fabricante (id,descricao) VALUES (3, "Doce Amor", null);
INSERT INTO fabricante (id,descricao) VALUES (4, "Doces Fazenda de Minas", null);
INSERT INTO fabricante (id,descricao) VALUES (5, "Germanos", null);
INSERT INTO fabricante (id,descricao) VALUES (6, "Yes", null);
INSERT INTO fabricante (id,descricao) VALUES (7, "Avaré", null);
INSERT INTO fabricante (id,descricao) VALUES (8, "Rio", null);
INSERT INTO fabricante (id,descricao) VALUES (9, "Yoot", null);
COMMIT;
BEGIN;