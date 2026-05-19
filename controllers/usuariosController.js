const e = require("express");
const usuarios = require("../data/usuarios.json");

const usuariosController = {

  // GET /usuarios
    getUsuarios: (req, res) => {
    const { nombre, email } = req.query;

    let resultado = usuarios;

    // filtro por nombre
    if (nombre) {
      resultado = resultado.filter(p =>
        p.nombre.toLowerCase().includes(nombre.toLowerCase())
      );
    }

    // filtro por email
    if (email) {
      resultado = resultado.filter(p =>
        p.email === parseInt(email)
      );
    }
    
    res.status(200).json(resultado);
  },

  // GET /peliculas/:id
  getUsuarioById: (req, res) => {

    const id = parseInt(req.params.id);
    const usuario = usuarios.find(p => p.id === id);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    
    res.status(200).json(usuario);
  },

  // POST /peliculas
  createUsuario: (req, res) => {
    const { nombre, email, edad } = req.body;

    if (!nombre || !email || !edad) {
      return res.status(400).json({
        mensaje: "Faltan datos: nombre, email y edad son obligatorios"
      });
    }

    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre,
      email,
      edad
    };

    usuarios.push(nuevoUsuario);

    res.status(201).json({
      mensaje: "Usuario creada correctamente",
      usuario: nuevoUsuario
    });
  },

 putUsuario: (req, res) => {
  const id = parseInt(req.params.id);
    const usuario = usuarios.find(p => p.id === id);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    } 

    if(usuario){
      const { nombre, email, edad } = req.body;

      if (!nombre || !email || !edad) {
        return res.status(400).json({
          mensaje: "Faltan datos: nombre, email y edad son obligatorios"
        });
      }

      const nuevoUsuario = {
        id: id,
        nombre,
        email,
        edad
      };

      usuarios.push(nuevoUsuario);

      res.status(201).json({
        mensaje: "Usuario creada correctamente, usuario" + id + " modificado",
        usuario: nuevoUsuario
      });
    }

    const { nombre, email } = req.query;

    res.status(200).json("asd");
  },


  deleteUsuario: (req, res) => {
  const id = parseInt(req.params.id);
    const usuario = usuarios.find(p => p.id === id);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    } 

    if(usuario){
      let i = 0;
      usuarios.forEach(element => {
        if(element.id == id){
          usuarios.splice(1, i);
          return res.status(404).json({ mensaje: "Usuario eliminado"+ element });

        }
        i++
        
      });
    }

    const { nombre, email } = req.query;

    res.status(200).json("asd");
  }
};



module.exports = usuariosController;