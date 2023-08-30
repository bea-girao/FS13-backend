const {faker} = require('@faker-js/faker/locale/pt_BR');
const database = require('./conexao');

let sql = 'INSERT INTO tb_cliente (nome) VALUES';

for (let i = 1; i <= 1000; i++) {
    sql += `('${faker.person.fullName()}'),`;
};

//remover a ultima virgula
sql = sql.slice(0, -1);

database.executar(sql);

