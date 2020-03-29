const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
/**
 * Rota / Recursos
 */

/**
 * Método HTTP:
 * 
 * GET: Busca uma informação do back-end
 * POST: Cria um informação no back-end
 * PUT: Altera uma informação no back-end
 * DELETE: Deletar uma informação do back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados na rota após o símbolo de interrogação "?" (Filtos, Paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para a requisição
  */

  /**
   * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users')
    * 
    */
/**app.get('/users', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Valdeci Alcântara'
    });
});
*/
app.listen(3333);
