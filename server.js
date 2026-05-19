const express = require("express");
const peliculasRoutes = require("./routes/peliculasRoutes");
const usuariosRoutes = require("./routes/usuariosRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API de películas funcionando");
});

// Rutas de la API
app.use("/api/peliculas", peliculasRoutes);

// Rutas de la API
app.use("/api/usuarios", usuariosRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ mensaje: "Ruta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});