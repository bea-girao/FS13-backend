const express = require('express');
const database = require('../../conexao')
const app = express.Router();

app.get('/disciplinas', async(req, res) => {
    let dados = await database.executar('SELECT * FROM tb_disciplina');
    
    res.send(dados);
});

app.get('/disciplinas/:id', async (req, res) => {
    let dados = await database.executar(`SELECT * FROM tb_disciplina WHERE id=${req.params.id}`);

    if (dados.length === 0) {
        res.status(404);
        res.send();
    }

    res.send(dados[0]);
});

app.post('/disciplinas', async(req, res) => {
    if (!req.body.nome) {
        res.status(400).json({
            "erro": "Nome é obrigatório"
        });
    }

    let {nome, carga_horaria} = req.body;

    let dados = await database.executar(
        `INSERT INTO tb_disciplina (nome, carga_horaria) VALUES ('${nome}', '${carga_horaria}')`
    );

    req.body.id = dados.insertId;

    res.status(201);
    res.send(req.body);
});

app.patch('/disciplinas/:id', async(req, res) => {
    let {nome, carga_horaria} = req.body;
    let id = req.params.id;

    await database.executar(
        `UPDATE tb_disciplina SET nome='${nome}', carga_horaria='${carga_horaria}' WHERE id='${id}')`
    );

    req.body.id = dados.id;
    res.send(req.body);
});

app.delete('/disciplinas/:id', async(req, res) => {
    let dados = await database.executar(`DELETE FROM tb_disciplina WHERE id=${req.params.id}`);
    
    if (dados.affectedRows === 0) {
        res.status(404);
        res.end();
    }

    res.status(204);
    res.end();
});

module.exports = app;