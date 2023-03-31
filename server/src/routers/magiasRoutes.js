import express from "express";
import MagiaController from "../controllers/magiasController.js";

const router = express.Router();

router
     .get("/magias", MagiaController.listarMagias)
     .get("/magias/busca", MagiaController.listarMagiasPorTipo)
     .get("/magias/:id", MagiaController.listarMagiaPorId)
     .post("/magias", MagiaController.cadastrarMagia)
     .put("/magias/:id", MagiaController.atualizaMagia)
     .delete("/magias/:id", MagiaController.excluirMagia)
export default router;