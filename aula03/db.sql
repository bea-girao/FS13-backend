USE db_escola;

CREATE TABLE tb_aluno (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    data_nasc DATE NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tb_aluno
    (nome, data_nasc, cpf)
VALUES
    ('Francisco de Castro', '1985-07-13', '12312312312');

INSERT INTO tb_aluno
    (nome, data_nasc, cpf)
VALUES
    ('Ana Maria Silva', '1988-10-30', '99988877766');

INSERT INTO tb_aluno
    (nome, data_nasc, cpf)
VALUES
    ('Dulcinaide Batista', '1988-11-12', '01064783400');

INSERT INTO tb_aluno
    (nome, data_nasc, cpf)
VALUES
    ('Carol Rodrigues', '1990-04-10', '06597399933');

INSERT INTO tb_aluno
    (nome, data_nasc, cpf)
VALUES
    ('Isabela Santiago', '2012-12-12', '63795699911');

INSERT INTO tb_aluno
    (nome, data_nasc, cpf)
VALUES
    ('Gabi Andrade Girao', '2013-06-11', '53785649263');

INSERT INTO tb_aluno
    (nome, data_nasc, cpf)
VALUES
    ('Lucas Veras', '2013-06-11', '37584937573');

INSERT INTO tb_aluno
    (nome, data_nasc, cpf)
VALUES
    ('Jose da Silva', '2000-12-05', '67453623877');

INSERT INTO tb_aluno
    (nome, data_nasc, cpf)
VALUES
    ('Carlos Araujo', '1968-05-27', '64739571308');

INSERT INTO tb_aluno
    (nome, data_nasc, cpf)
VALUES
    ('Ricardo Silva Gonçalves', '1968-05-27', '56382740199');

INSERT INTO tb_aluno
    (nome, data_nasc, cpf)
VALUES
    ('Roberta Filomeno', '1970-01-21', '83647194628');

SELECT nome, data_nasc FROM tb_aluno WHERE data_nasc >= '1995-01-01' AND data_nasc <= '2000-01-01';

SELECT nome, data_nasc FROM tb_aluno WHERE data_nasc BETWEEN '1995-01-01' AND '2000-01-01';

SELECT * FROM tb_aluno WHERE nome LIKE '%Silva';

SELECT * FROM tb_aluno WHERE nome LIKE '%Silva%';

SELECT * FROM tb_aluno WHERE nome LIKE '%Silva%' OR nome LIKE 'Lucas%';

CREATE TABLE tb_curso (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    carga_horaria INT(4) NOT NULL
);

INSERT INTO tb_curso
    (nome, carga_horaria)
VALUES
    ('Analise e Desenvolvimento de Sistemas', '3600');

INSERT INTO tb_curso
    (nome, carga_horaria)
VALUES
    ('Ciencias Sociais', '8000');

INSERT INTO tb_curso
    (nome, carga_horaria)
VALUES
    ('Sistemas de Informacao', '7000');