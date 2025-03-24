const express = require("express");
const ControllersDog = require("../controllers/dog");

const dog = new ControllersDog();

const router = express.Router();

router.get("/api/v1/names", dog.PegarTodos);
router.get("/api/v1/name/:id", dog.PegarUm);
router.post("/api/v1/name", dog.Adicionar);
router.put("/api/v1/name/:id", dog.Alterar);
router.delete("/api/v1/name/:id", dog.Deletar);

module.exports = router;
