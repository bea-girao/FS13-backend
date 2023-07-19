-- listar os bancos de dados --
SHOW DATABASES;

-- CRIAR O DB --
CREATE DATABASE db_escola;

-- excluir um db --
DROP DATABASE db_escola;

-- selecionar/entrar no db --
USE db_escola;

-- visualizar a estrutura de uma tabela -- 
DESC tb_curso;

-- criar uma tabela --
CREATE TABLE tb_curso (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    carga_horaria INT(4)
);

-- ALTERAR UMA TABELA -- 
ALTER TABLE tb_curso
    ADD COLUMN
        descricao VARCHAR(100);

-- INSERIR DADOS EM UMA TABELA --
INSERT INTO tb_curso
    (nome, carga_horaria)
VALUES
    ('Fullstack', '192');

INSERT INTO tb_curso
    (nome, carga_horaria)
VALUES
    ('PHP', '90');

CREATE TABLE tb_categoria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(100)
);

INSERT INTO tb_categoria
    (nome, descricao)
VALUES
    ('camisa', 'addidas');

INSERT INTO tb_categoria
    (nome, descricao)
VALUES
    ('tenis', 'nike');