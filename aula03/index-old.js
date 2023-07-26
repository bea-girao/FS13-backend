/* 

const http = require('http');
const database = require('./conexao');

//toda funçao pra se conectar com o banco de dados precisa ser assíncrona
async function recepcao(req, res) {
    if (req.url === '/alunos') {
        let dados = await database.executar('SELECT * FROM tb_aluno');
        
        res.end(
            JSON.stringify(dados)
        );
    }

    if (req.url === '/alunos/5') {
        let dados = await database.executar('SELECT * FROM tb_aluno WHERE id=5');

        res.end(
            JSON.stringify(dados)
        );
    }
}

http.createServer(recepcao).listen(8000); 

*/