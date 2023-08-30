const {faker} = require('@faker-js/faker/locale/pt_BR');
const database = require('./conexao');


/*for (let i = 1; i <= 100; i++) {
    database.executar(`
        INSERT INTO tb_categoria (nome) VALUES ('Categoria teste ${faker.commerce.department()}')
    `);
}*/

let nomes = faker.helpers.uniqueArray(
    faker.commerce.department,
    20
);

nomes.forEach(cada => {
    database.executar(`
        INSERT INTO tb_categoria (nome) VALUES ('${cada}')
    `);
});



//node gerar-categorias.js

//SELECT * FROM tb_categoria;