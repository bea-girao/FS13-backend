const express = require('express');
const database = require('./conexao');

const app = express();
app.use(express.json()); //a API vai trabalhar com JSON

app.get('/alunos', async (req, res) => {
    let dados = await database.executar('SELECT * FROM tb_aluno')
    
    res.end(
        JSON.stringify(dados)
    );
});

app.get('/alunos/:id', async (req, res) => {
    let id = req.params.id;
    let dados = await database.executar(`SELECT * FROM tb_aluno WHERE id=${id}`)
    
    res.end(
        JSON.stringify(dados)
    );
});

app.post('/alunos', async (req, res) => {
    let {nome, data_nasc, cpf} = req. body;

    await database.executar(
        `INSERT INTO tb_aluno (nome, data_nasc, cpf)
        VALUES ('${nome}', '${data_nasc}', '${cpf}')`
    );

    res.end('deu bom');
})

//subindo a conexao
app.listen(8000, () => {

});