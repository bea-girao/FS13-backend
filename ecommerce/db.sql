CREATE DATABASE db_loja;

USE db_loja;

CREATE TABLE tb_categoria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30)
);

CREATE TABLE tb_produto (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES tb_categoria(id)
);

INSERT INTO tb_categoria (nome) VALUES ('Informática');

INSERT INTO tb_produto (nome, valor, categoria_id)
VALUES ('Mouse', 29.99, 1);

INSERT INTO tb_produto (nome, valor, categoria_id)
VALUES ('Teclado', 99.99, 1);

CREATE TABLE tb_cliente (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE tb_carrinho (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT,
    produto_id INT,
    quantidade INT,
    FOREIGN KEY (produto_id) REFERENCES tb_produto(id),
    FOREIGN KEY (cliente_id) REFERENCES tb_cliente(id)
);

INSERT INTO tb_categoria (nome) VALUES ('Papelaria');
INSERT INTO tb_categoria (nome) VALUES ('Escritório');
INSERT INTO tb_categoria (nome) VALUES ('Móveis');
INSERT INTO tb_categoria (nome) VALUES ('Petshop');
INSERT INTO tb_categoria (nome) VALUES ('Esportivo');

INSERT INTO tb_cliente (nome) VALUES ('Ana');
INSERT INTO tb_cliente (nome) VALUES ('Bia');
INSERT INTO tb_cliente (nome) VALUES ('Albert');
INSERT INTO tb_cliente (nome) VALUES ('Flávia');
INSERT INTO tb_cliente (nome) VALUES ('Cláudia');

INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Lápis', 1.00, 2);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Caneta', 2.50, 2);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Lápis', 1.00, 2);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Estojo escolar', 9.99, 2);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Cadeira', 500.00, 3);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Mesa', 999.90, 3);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Guarda-roupa', 1500.00, 4);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Criado-mudo', 550.00, 4);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Sashê', 5.50, 5);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Areia higiênica', 21.20, 5);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Cadeira', 500.00, 3);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Mesa', 999.90, 3);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Guarda-roupa', 1500.00, 4);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Criado-mudo', 550.00, 4);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Sashê', 5.50, 5);
INSERT INTO tb_produto (nome, valor, categoria_id) VALUES ('Areia higiênica', 21.20, 5);

SELECT tb_produto.*, tb_categoria.nome
FROM tb_produto
INNER JOIN tb_categoria
ON tb_produto.categoria_id = tb_categoria.id
WHERE tb_produto.valor > 200;

SELECT tb_produto.*, tb_categoria.nome
FROM tb_produto
RIGHT JOIN tb_categoria
ON tb_produto.categoria_id = tb_categoria.id
WHERE tb_produto.categoria_id IS NULL;

INSERT INTO tb_carrinho (produto_id, cliente_id, quantidade) VALUES (2, 3, 5);
INSERT INTO tb_carrinho (produto_id, cliente_id, quantidade) VALUES (7, 2, 3);
INSERT INTO tb_carrinho (produto_id, cliente_id, quantidade) VALUES (9, 1, 2);
INSERT INTO tb_carrinho (produto_id, cliente_id, quantidade) VALUES (3, 3, 4);
INSERT INTO tb_carrinho (produto_id, cliente_id, quantidade) VALUES (6, 2, 1);

SELECT 
    tb_cliente.nome AS CLIENTE, 
    tb_carrinho.quantidade, 
    tb_produto.nome AS PRODUTO, 
    tb_categoria.nome AS CATEGORIA,
    (tb_produto.valor * tb_carrinho.quantidade) AS TOTAL
FROM tb_carrinho
INNER JOIN tb_cliente
INNER JOIN tb_produto
INNER JOIN tb_categoria
ON tb_carrinho.cliente_id = tb_cliente.id
AND tb_carrinho.produto_id = produto.id
AND tb_produto.categoria_id = categoria.id
ORDER BY cliente; 