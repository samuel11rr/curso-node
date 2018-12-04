const express         = require('express');
let { verificaToken, verificaAdmin_Role } = require('../middlewares/autenticacion');
let Categoria         = require('../models/categoria');
let app               = express();


// MOSTRAR TODAS LAS CATEGORIAS
app.get('/categoria', verificaToken, (req, res) => {
  Categoria.find({})
           .sort('descripcion')
           .populate('usuario', 'nombre email',)
           .exec( (err, categorias) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }

    res.json({
      ok: true,
      categorias
    });

  })
});


// MOSTRAR CATEGORIA POR ID
app.get('/categoria/:id', verificaToken, (req, res) => {

  let id = req.params.id;

  Categoria.findById( id, (err, categoriaDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }

    if (!categoriaDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'El id es incorrecto'
        }
      })
    }

    res.json({
      ok: true,
      categoria: categoriaDB
    });

  })
});


// CREAR NUEVA CATEGORIA
app.post('/categoria', verificaToken, (req, res) => {
  let body = req.body;

  let categoria = new Categoria({
    descripcion: body.descripcion,
    usuario: req.usuario._id
  });

  categoria.save( (err, categoriaDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }

    if (!categoriaDB) {
      return res.status(400).json({
        ok: false,
        err
      })
    }

    res.json({
      ok: true,
      categoria: categoriaDB
    });

  });
});


// ACTUALIZAR CATEGORIA
app.put('/categoria/:id', (req, res) => {
  let id = req.params.id;
  let body = req.body;
  let descCategoria = {
    descripcion: body.descripcion
  };

  Categoria.findByIdAndUpdate( id, descCategoria, {new:true, runValidators:true}, (err, categoriaDB ) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }

    if (!categoriaDB) {
      return res.status(400).json({
        ok: false,
        err
      })
    }

    res.json({
      ok: true,
      categoria: categoriaDB
    });
  });
});


// ELIMINAR CATEGORIA
app.delete('/categoria/:id', [verificaToken, verificaAdmin_Role], (req, res) => {
  let id = req.params.id;

  Categoria.findByIdAndRemove( id, (err, categoriaDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }

    if (!categoriaDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'El id no existe'
        }
      })
    }

    res.json({
      ok: true,
      message: 'Categoría eliminada'
    });
  });
});


module.exports = app;
