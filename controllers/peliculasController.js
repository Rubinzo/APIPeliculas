const peliculas = require("../data/peliculas.json");


const peliculasController = {

  // GET /peliculas
  getPeliculas: (req, res) => {
    const { director, anio } = req.query;
    console.log(typeof(peliculas))
    let resultado = peliculas;

    // filtro por director
    if (director) {
      resultado = resultado.filter(p =>
        p.director.toLowerCase().includes(director.toLowerCase())
      );
    }

    // filtro por año
    if (anio) {
      resultado = resultado.filter(p =>
        p.anio === parseInt(anio)
      );
    }
    res.status(200).json(resultado);
  },

  // GET /peliculas/:id
  getPeliculaById: (req, res) => {
    const id = parseInt(req.params.id);
    const pelicula = peliculas.find(p => p.id === id);

    if (!pelicula) {
      return res.status(404).json({ mensaje: "Película no encontrada" });
    }
    
    res.status(200).json(pelicula);
  },

  // POST /peliculas
  createPelicula: (req, res) => {
    const { titulo, director, anio } = req.body;

    if (!titulo || !director || !anio) {
      return res.status(400).json({
        mensaje: "Faltan datos: titulo, director y anio son obligatorios"
      });
    }

    const nuevaPelicula = {
      id: peliculas.length + 1,
      titulo,
      director,
      anio
    };

    peliculas.push(nuevaPelicula);

    res.status(201).json({
      mensaje: "Película creada correctamente",
      pelicula: nuevaPelicula
    });
  },


  //Put
  putPelicula: (req, res) => {
  const id = parseInt(req.params.id);
    const pelicula = peliculas.find(p => p.id === id);

    if (!pelicula) {
      return res.status(404).json({ mensaje: "Pelicula no encontrada" });
    } 

    if(pelicula){
      const { titulo, director, anio } = req.body;

      if (!id) {
        return res.status(400).json({
          mensaje: "Faltan el id"
        });
      }

      const nuevaPelicula = {
        id: id,
        titulo,
        director,
        anio
      };

      usuarios.push(nuevaPelicula);

      res.status(201).json({
        mensaje: "Pelicula creada correctamente, pelicula" + id + " modificado",
        pelicula: nuevaPelicula
      });
    }

    const { titulo, director } = req.query;

    res.status(200).json(nuevaPelicula);
  }

};

module.exports = peliculasController;