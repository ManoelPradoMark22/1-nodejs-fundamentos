const express = require("express");

const app = express();

//para poder passar o body em Json
app.use(express.json());

/**
 * GET - Buscar uma informação dentro do servidor
 * POST  - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação específica
 * DELETE - Deletar uma informação no servidor
 */

/**
 * Tipos de parâmetros
 * 
 * Route Params => Identificar um recurso editar/deletar/burcar
 * Query Params => Paginação/Filtro
 * Body Params => Os objetos passados para inserção/alteração de recursos (JSON)
 */

 app.get("/", (request, response) => {
  return response.json({message: "Hello World IGNITE!"});
});

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  //http://localhost:3333/courses?page=1
  //http://localhost:3333/courses?page=1&type=2
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
  //const params = request.params;
  const { id } = request.params; //com desestruturação
  console.log(id);
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 3", "Curso 4"]);
})

app.listen(3333);