const express = require('express');
const cors = require('cors')

const database = require('./conexao');
const curso = require('./src/Curso/routes');
const disciplina = require('./src/Disciplina/routes')

const app = express();
app.use(express.json()); //a API vai trabalhar com JSON
app.use(cors());

app.use(curso);
app.use(disciplina);

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