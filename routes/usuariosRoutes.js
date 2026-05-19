const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosController");

// Obtener todas
router.get("/", usuariosController.getUsuarios);

// Obtener por ID
router.get("/:id/", usuariosController.getUsuarioById);

// Crear nueva
router.post("/", usuariosController.createUsuario);

//Cambiar usuario
router.put("/:id", usuariosController.putUsuario);

//Borrar usuario
router.delete("/:id", usuariosController.deleteUsuario);


module.exports = router;