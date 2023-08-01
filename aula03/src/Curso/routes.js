const express = require('express');
const database = require('../../conexao')
const app = express.Router(); //Router para separar os endpoints por rotas

app.get('/cursos', async(req, res) => {
    let dados = await database.executar('SELECT * FROM tb_curso');
    
    res.send(dados);
});

app.get('/cursos/:id', async (req, res) => {
    let dados = await database.executar(`SELECT * FROM tb_curso WHERE id=${req.params.id}`);

    res.send(dados[0]);
});

app.post('/cursos', async(req, res) => {
    let {nome, carga_horaria} = req.body;

    await database.executar(
        `INSERT INTO tb_curso (nome, carga_horaria) VALUES ('${nome}', '${carga_horaria}')`
    );
    res.status(201); //CREATED
    res.send(req.body);
});

app.patch('/cursos/:id', (req, res) => {
    res.end('vai editar um curso existente');
});

app.delete('/cursos/:id', async(req, res) => {
    await database.executar(`DELETE FROM tb_curso WHERE id=${req.params.id}`);
    
    res.status(204); //SUCESSO COM STATUS 'NO CONTENT': nao retorna dados
    res.end();
});

module.exports = app;