import express from "express";
import livros from "./livrosRoutes.js";
import talentos from "./talentosRoutes.js";
import chars from "./charsRoutes.js";
import magias from "./magiasRoutes.js";

const routes = (app) =>{
     app.route('/').get((req, res) =>{
          res.status(200).send({titulos: "curso node"})
     })
     app.use(
          express.json(),
          talentos,
          livros,
          chars,
          magias
     )
}

export default routes