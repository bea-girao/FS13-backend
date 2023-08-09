const express = require('express');
const database = require('../../conexao')
const app = express.Router();

const TABLE = 'tb_disciplina';

app.get('/disciplinas', async(req, res) => {
    let dados = await database.executar(`SELECT * FROM ${TABLE}`);
    
    res.send(dados);
});

app.get('/disciplinas/:id', async (req, res) => {
    let dados = await database.executar(`SELECT * FROM ${TABLE} WHERE id=${req.params.id}`);

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

    if (isNaN(carga_horaria)) {
        res.status(400).send();
        return;
    }

    let {nome, carga_horaria} = req.body;

    let resultado = await database.executar(
        `INSERT INTO ${TABLE} (nome, carga_horaria) VALUES ('${nome}', '${carga_horaria}')`
    );

    req.body.id = resultado.insertId;

    res.status(201);
    res.send(req.body);
});

app.patch('/disciplinas/:id', async(req, res) => {
    let {nome, carga_horaria} = req.body;

    await database.executar(
        `UPDATE ${TABLE} SET nome='${nome}', carga_horaria='${carga_horaria}' WHERE id='${req.params.id}')`
    );

    req.body.id = req.params.id;
    res.send(req.body);
});

app.delete('/disciplinas/:id', async(req, res) => {
    let dados = await database.executar(`DELETE FROM ${TABLE} WHERE id=${req.params.id}`);
    
    if (dados.affectedRows === 0) {
        res.status(404).json({
            "erro": "Disciplina não cadastrada"
        });
        res.end();
    }

    res.status(204);
    res.end();
});

module.exports = app;