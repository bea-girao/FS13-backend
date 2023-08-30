const mysql2 = require('mysql2/promise');

async function executar(sql) {
    let conexao = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'db_loja',
        port: '3306',
    });
    //SHOW GLOBAL VARIABLES LIKE 'PORT';

    let [results] = await conexao.query(sql);

    return results;
}


module.exports = {
    executar
};