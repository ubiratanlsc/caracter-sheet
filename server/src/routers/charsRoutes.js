import express from "express";
import CharController from "../controllers/charsController.js";

const router = express.Router();

router
     .get("/chars", CharController.listarChars)
     .get("/chars/busca", CharController.listarCharsPorTipo)
     .get("/chars/:id", CharController.listarCharPorId)
     .post("/chars", CharController.cadastrarChar)
     .put("/chars/:id", CharController.atualizaChar)
     .delete("/chars/:id", CharController.excluirChar)
export default router;