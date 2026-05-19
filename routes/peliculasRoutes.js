const express = require("express");
const router = express.Router();

const peliculasController = require("../controllers/peliculasController");

// Obtener todas
router.get("/", peliculasController.getPeliculas);

// Obtener por ID
router.get("/:id", peliculasController.getPeliculaById);

// Crear nueva
router.post("/", peliculasController.createPelicula);

//Put
router.put("/:id", peliculasController.putPelicula);

module.exports = router;