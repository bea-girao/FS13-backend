const express = require('express');
const database = require('../../conexao')
const app = express.Router(); //Router para separar os endpoints por rotas

app.get('/cursos', async(req, res) => {
    let dados = await database.executar('SELECT * FROM tb_curso');
    
    res.send(dados);
});

app.get('/cursos/:id', async (req, res) => {
    let dados = await database.executar(`SELECT * FROM tb_curso WHERE id=${req.params.id}`);

    if (dados.length === 0) {
        res.status(404);
        res.send();
    }

    res.send(dados[0]);
});

app.post('/cursos', async(req, res) => {
    if (!req.body.nome) {
        //BAD REQUEST
        res.status(400).json({
            "erro": "Nome é obrigatório"
        });
    }

    let {nome, carga_horaria} = req.body;

    let dados = await database.executar(
        `INSERT INTO tb_curso (nome, carga_horaria) VALUES ('${nome}', '${carga_horaria}')`
    );

    req.body.id = dados.insertId; //mysql2 -> insere o campo Id no corpo da requisicao

    res.status(201); //CREATED
    res.send(req.body);
});

app.patch('/cursos/:id', async(req, res) => {
    let {nome, carga_horaria} = req.body;
    let id = req.params.id;

    await database.executar(
        `UPDATE tb_curso SET nome='${nome}', carga_horaria='${carga_horaria}' WHERE id='${id}')`
    );

    req.body.id = dados.id;
    res.send(req.body);
});

app.delete('/cursos/:id', async(req, res) => {
    let dados = await database.executar(`DELETE FROM tb_curso WHERE id=${req.params.id}`);
    
    if (dados.affectedRows === 0) {
        res.status(404);
        res.end();
    }

    res.status(204); //SUCESSO COM STATUS 'NO CONTENT': nao retorna dados
    res.end();
});

module.exports = app;