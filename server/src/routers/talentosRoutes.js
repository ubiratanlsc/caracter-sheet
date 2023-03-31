import express from "express";
import TalentoController from "../controllers/talentosController.js";

const router = express.Router();

router
     .get("/talentos", TalentoController.listarTalentos)
     .get("/talentos/busca", TalentoController.listarTalentosPorTipo)
     .get("/talentos/:id", TalentoController.listarTalentoPorId)
     .post("/talentos", TalentoController.cadastrarTalento)
     .put("/talentos/:id", TalentoController.atualizaTalento)
     .delete("/talentos/:id", TalentoController.excluirTalento)
export default router;