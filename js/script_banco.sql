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
COMMIT;
--TABELA FABRICANTE
BEGIN;
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
--TABELA ESTOQUE
CREATE TABLE estoque (
    id INTEGER GENERATED BY DEFAULT AS IDENTITY,
    data_atualizacao TIMESTAMP NOT NULL,
    quantidade INTEGER NOT NULL,
    produto_id INTEGER,
    PRIMARY KEY (id)
);
--TABELA IMAGEM
CREATE TABLE imagem_produto (
    id INTEGER GENERATED BY DEFAULT AS IDENTITY,
    arquivo VARCHAR(255),
    dados BOLB,
    extensao VARCHAR(255),
    is_imagem_principal BOOLEAN,
    nome_arquivo VARCHAR(255),
    tamanho INTEGER,
    produto_id INTEGER,
    PRIMARY KEY (id)
);
--TABELA PRODUTOS
CREATE TABLE produto (
    id INTEGER GENERATED BY DEFAULT AS IDENTITY,
    descricao VARCHAR(255),
    fabricante INTEGER,
    nome VARCHAR(255),
    peso DOUBLE,
    preco DOUBLE,
    imagem_id INTEGER,
    PRIMARY KEY (id)
);
--TABELAS DE RELACIONAMENTOS
CREATE TABLE produto_categorias (
    produto_id INTEGER NOT NULL,
    categorias INTEGER
);
ALTER TABLE estoque 
       ADD CONSTRAINT FKh201uorwvq9pjj4dsvjyo73ft 
       FOREIGN KEY (produto_id) 
       REFERENCES produto
ALTER TABLE imagem_produto 
       ADD CONSTRAINT FKjqedldpqac4hasxuw3evjr9im 
       FOREIGN KEY (produto_id) 
       REFERENCES produto
ALTER TABLE produto 
       ADD CONSTRAINT FKlp6xun9181ct89o81jbih2yep 
       FOREIGN KEY (imagem_id) 
       REFERENCES imagem_produto
ALTER TABLE produto_categorias 
       ADD CONSTRAINT FKjc9xq6yjeq6w2c500bsjj8pip 
       FOREIGN KEY (produto_id) 
       REFERENCES produto
--GO
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (1,"Doce de Leite","Doce de Leite para dietas de ingestão controlada de açúcares", 1, 600, 28.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (2, "Doce de Leite com Coco", "Doce de Leite para dietas de ingestão controlada de açúcares", 1, 600,  28.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (3, "Doce de Leite com Ameixa", "Doce de Leite para dietas de ingestão controlada de açúcares", 1, 600,  28.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (4, "Cocada Cremosa", "Cocada Cremosa para dietas de ingestão controlada de açúcares", 1, 600,  28.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (5, "Doce de Leite com Nozes", "Doce de Leite para dietas de ingestão controlada de açúcares", 1, 600,  28.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (6, "Doce de Abóbora com Coco", "Doce de Abóbora com Coco para dietas de ingestão controlada de açúcares", 1, 600,  28.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (7, "Pé de Moça de Colher", "Doce de Amendoin tipo pé de moça para dietas de ingestão controlada de açúcares - SEM ADIÇÃO DE AÇÚCARES", 1, 600, 35.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (8, "Leite Condensado", "Sobremesa Láctea sabor Leite Condensado para Dietas de ingestão controlada de açúcares", 1, 600, 35.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (9, "Beijinho", "Foundant de Leite com Coco para dietas de ingestão controlada de açúcares", 1, 600, 28.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (10, "Goibada Cascão Diet", "Goibada Cascão Diet - Linha Premium", 2, 600, 44.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (11, "Bananinha", "Bananinha - Sem adição de açúcar", 2, 600, 44.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (12, "Abacaxi com Coco", "Barrinha de Fruta de Abacaxi com Coco - Sem adição de açúcar", 2, 600, 44.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (13, "Banana com cobertura de chocolate", "Barrinha de Fruta de Banana com cobertura de chocolate", 2, 600, 44.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (14, "Coco com cobertura de chocolate", "Barrinha de Fruta de Coco com cobertura de chocolate", 2, 600, 44.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (15, "Paçoca", "Paçoca Moreninha do Rio", 8, 800, 19.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (16, "Palha Italiana", "Palha Italiana Sabor Chocolate Enriquecida com Whey Protein", 5, 30, 14.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (17, "Palha Italiana", "Palha Italiana Sabor Cookies & Cream Enriquecida com Whey Protein", 5, 30, 14.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (18, "Caramelos de Leite", "Caramelos de Leite - Sem adição de açúcares - Contém açúcares próprios dos ingredientes", 7, 200, 14.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (19, "Gotas de Leite", "Produzido em Avaré: Doce de Leite Pingo para dietas com insgestão controlada de açúcares", 7, 100, 21,99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (20, "Pirulito", "Pirulito Sabor Morango Zero Açúcar", 3, 35, 13.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (21, "Merenguinho",  "Merenguinho - Sabor Original", 3, 35, 15.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (22, "Pingo de Leite", "Foundant de Leite", 9, 500, 33.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (23, "Cidra", "Cidra Ralada para dietas com insgestão controlada de açúcares", 4, 400, 28.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (24, "Goiabada Cascão", "Goiabada Cascão (Jam Cascão) para dietas com insgestão controlada de açúcares", 4, 400, 28.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (25, "Bananinha Cremosa", "Bananinha Cremosa Sem Adição de Açúcares", 2, 100, 21.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (26, "Goiabada Cascão", "Goiabada Cascão em barra para dietas com ingestão controlada de açúcares", 4, 500, 25.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (27, "Goiabada Cascão Zero Açúcar", "Goiabada Cascão em barra sem adição de açúcares", 1, 150, 21.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (28, "Pé de Moça Zero Açúcar", "Pé de Moça em barra sem adição de açúcares", 1, 150, 21.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (29, "Cocada ao Leite", "Cocada ao Leite em tablete sem adição de açúcares para dietas de ingestão controlada de açúcares", 1, 150, 21.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (30, "Doce de Leite", "Doce de Leite em tablete sem adição de açúcares para dietas de ingestão controlada de açúcares", 1, 150, 21.99);
INSERT INTO produto (id,nome,descricao,fabricante,peso,preco) VALUES (31, "YES! Milk Shake Instantâneo", "YES! Milk Shake Instantâneo - Sabor Mo", 6, 80, 38.99);
--GO
INSERT INTO produto_categorias VALUES (1,1);
INSERT INTO produto_categorias VALUES (1,2);
INSERT INTO produto_categorias VALUES (1,7);
INSERT INTO produto_categorias VALUES (2,1);
INSERT INTO produto_categorias VALUES (2,2);
INSERT INTO produto_categorias VALUES (2,7);
INSERT INTO produto_categorias VALUES (3,1);
INSERT INTO produto_categorias VALUES (3,2);
INSERT INTO produto_categorias VALUES (3,7);
INSERT INTO produto_categorias VALUES (4,1);
INSERT INTO produto_categorias VALUES (4,2);
INSERT INTO produto_categorias VALUES (4,7);
INSERT INTO produto_categorias VALUES (5,1);
INSERT INTO produto_categorias VALUES (5,2);
INSERT INTO produto_categorias VALUES (5,7);
INSERT INTO produto_categorias VALUES (6,1);
INSERT INTO produto_categorias VALUES (6,2);
INSERT INTO produto_categorias VALUES (6,7);
INSERT INTO produto_categorias VALUES (7,1);
INSERT INTO produto_categorias VALUES (7,2);
INSERT INTO produto_categorias VALUES (7,3);
INSERT INTO produto_categorias VALUES (7,7);
INSERT INTO produto_categorias VALUES (8,1);
INSERT INTO produto_categorias VALUES (8,2);
INSERT INTO produto_categorias VALUES (8,7);
INSERT INTO produto_categorias VALUES (9,1);
INSERT INTO produto_categorias VALUES (9,2);
INSERT INTO produto_categorias VALUES (9,7);
INSERT INTO produto_categorias VALUES (10,1);
INSERT INTO produto_categorias VALUES (10,6);
INSERT INTO produto_categorias VALUES (11,1);
INSERT INTO produto_categorias VALUES (11,6);
INSERT INTO produto_categorias VALUES (12,1);
INSERT INTO produto_categorias VALUES (12,6);
INSERT INTO produto_categorias VALUES (13,1);
INSERT INTO produto_categorias VALUES (13,6);
INSERT INTO produto_categorias VALUES (14,1);
INSERT INTO produto_categorias VALUES (14,6);
INSERT INTO produto_categorias VALUES (15,1);
INSERT INTO produto_categorias VALUES (15,2);
INSERT INTO produto_categorias VALUES (15,6);
INSERT INTO produto_categorias VALUES (15,7);
INSERT INTO produto_categorias VALUES (15,8);
INSERT INTO produto_categorias VALUES (16,1);
INSERT INTO produto_categorias VALUES (16,3);
INSERT INTO produto_categorias VALUES (16,5);
INSERT INTO produto_categorias VALUES (17,1);
INSERT INTO produto_categorias VALUES (17,3);
INSERT INTO produto_categorias VALUES (17,5);
INSERT INTO produto_categorias VALUES (17,8);
INSERT INTO produto_categorias VALUES (18,1);
INSERT INTO produto_categorias VALUES (18,3);
INSERT INTO produto_categorias VALUES (18,8);
INSERT INTO produto_categorias VALUES (19,1);
INSERT INTO produto_categorias VALUES (19,8);
INSERT INTO produto_categorias VALUES (20,3);
INSERT INTO produto_categorias VALUES (20,8);
INSERT INTO produto_categorias VALUES (21,3);
INSERT INTO produto_categorias VALUES (21,8);
INSERT INTO produto_categorias VALUES (22,1);
INSERT INTO produto_categorias VALUES (23,1);
INSERT INTO produto_categorias VALUES (23,6);
INSERT INTO produto_categorias VALUES (23,7);
INSERT INTO produto_categorias VALUES (23,8);
INSERT INTO produto_categorias VALUES (24,1);
INSERT INTO produto_categorias VALUES (24,6);
INSERT INTO produto_categorias VALUES (24,7);
INSERT INTO produto_categorias VALUES (24,8);
INSERT INTO produto_categorias VALUES (25,1);
INSERT INTO produto_categorias VALUES (25,6);
INSERT INTO produto_categorias VALUES (25,7);
INSERT INTO produto_categorias VALUES (25,8);
INSERT INTO produto_categorias VALUES (26,1);
INSERT INTO produto_categorias VALUES (26,6);
INSERT INTO produto_categorias VALUES (27,1);
INSERT INTO produto_categorias VALUES (27,6);
INSERT INTO produto_categorias VALUES (28,1);
INSERT INTO produto_categorias VALUES (28,7);
INSERT INTO produto_categorias VALUES (29,1);
INSERT INTO produto_categorias VALUES (29,7);
INSERT INTO produto_categorias VALUES (30,1);
INSERT INTO produto_categorias VALUES (30,7);
INSERT INTO produto_categorias VALUES (31,1);
INSERT INTO produto_categorias VALUES (31,7);
--GO
INSERT INTO estoque VALUES (1,  now(), 25, 1 );
INSERT INTO estoque VALUES (2,  now(), 25, 2 );
INSERT INTO estoque VALUES (3,  now(), 25, 3 );
INSERT INTO estoque VALUES (4,  now(), 25, 4 );
INSERT INTO estoque VALUES (5,  now(), 25, 5 );
INSERT INTO estoque VALUES (6,  now(), 25, 6 );
INSERT INTO estoque VALUES (7,  now(), 25, 7 );
INSERT INTO estoque VALUES (8,  now(), 25, 8 );
INSERT INTO estoque VALUES (9,  now(), 25, 9 );
INSERT INTO estoque VALUES (10, now(), 25, 10);
INSERT INTO estoque VALUES (11, now(), 25, 11);
INSERT INTO estoque VALUES (12, now(), 25, 12);
INSERT INTO estoque VALUES (13, now(), 25, 13);
INSERT INTO estoque VALUES (14, now(), 25, 14);
INSERT INTO estoque VALUES (15, now(), 25, 15);
INSERT INTO estoque VALUES (16, now(), 25, 16);
INSERT INTO estoque VALUES (17, now(), 25, 17);
INSERT INTO estoque VALUES (18, now(), 25, 18);
INSERT INTO estoque VALUES (19, now(), 25, 19);
INSERT INTO estoque VALUES (20, now(), 25, 20);
INSERT INTO estoque VALUES (21, now(), 25, 21);
INSERT INTO estoque VALUES (22, now(), 25, 22);
INSERT INTO estoque VALUES (23, now(), 25, 23);
INSERT INTO estoque VALUES (24, now(), 25, 24);
INSERT INTO estoque VALUES (25, now(), 25, 25);
INSERT INTO estoque VALUES (26, now(), 25, 26);
INSERT INTO estoque VALUES (27, now(), 25, 27);
INSERT INTO estoque VALUES (28, now(), 25, 28);
INSERT INTO estoque VALUES (29, now(), 25, 29);
INSERT INTO estoque VALUES (30, now(), 25, 30);
INSERT INTO estoque VALUES (31, now(), 25, 31);
COMMIT;