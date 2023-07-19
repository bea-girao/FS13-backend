const http = require('http');
const db = require('./conexao');

async function recepcao (req, res) {
    if(req.url === '/cursos') {
        //buscando os dados do banco
        let cursos = await db.executar('SELECT * FROM tb_curso');

        //transformando os dados em json
        let json = JSON.stringify(cursos);

        //finalizando a resposta
        res.end(json);
        
        return;
    }

    if (req.url === '/categorias') {
        //buscando os dados do banco
        let categorias = await db.executar('SELECT * FROM tb_categoria');

        //transformando os dados em json
        let json = JSON.stringify(categorias);

        //finalizando a resposta
        res.end(json);
        
        return;
    } else if (req.url === '/produtos') {
        res.end('Listar produtos') 
    } else {
        res.end('pagina nao encontrada')
    }
}

http.createServer(recepcao).listen(8000);