const {faker} = require('@faker-js/faker/locale/pt_BR');
const database = require('./conexao');


let sql = 'INSERT INTO tb_produto (nome, valor, categoria_id) VALUES';

for (let i = 1; i <= 10000; i++) {
    let nome = faker.commerce.product();
    let valor = faker.commerce.price();
    let categoria_id = faker.number.int({min: 1507, max: 1526})
    
    sql += `('${nome}', ${valor}, ${categoria_id}),`;
};

//remover a ultima virgula
sql = sql.slice(0, -1);

database.executar(sql);

