//importando a biblioteca mysql2, que é a ponte entre o nodejs e o bd
const mysql = require('mysql2/promise');

async function executar (query) {
    const con = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'db_escola',
        password: '1234',
        port: '3306' //SHOW GLOBAL VARIABLES LIKE 'PORT';
    });

    const [results] = await con.query(query);

    return results;
}

module.exports = {
    executar
};