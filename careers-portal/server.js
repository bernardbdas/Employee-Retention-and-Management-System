/**
 * File: server.js
 * Description: arquivo responsável por toda a configuração e execução da aplicação.
 * Data: 02/03/2020
 * Author: Glaucia Lemos
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação executando na porta ', port);
});