const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/*   Métodos HTTP:

    GET: Buscar/Listar uma informação no back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DElETE: Deletar uma informação no backend
*/ 

/*   Tipos de parâmetros:

    Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
    Route params: Parâmetros utilizados para identificar recursos
    Request Body: Corpo da requisição, utilizado para criar o alterar recursos
*/

module.exports = app;