const express  = require('express');
let app        = express();
let Producto   = require('../models/producto');
let { verificaToken, verificaAdmin_Role } = require('../middlewares/autenticacion');


// OBTENER TODOS LOS PRODUCTOS
app.get('/productos', verificaToken, (req, res) => {
  // todos los productos con usuario y categoria. paginado
  let desde = req.query.desde || 0;
  desde = Number(desde);

  Producto.find({disponible: true})
          .skip(desde)
          .limit(5)
          .populate('usuario', 'nombre email')
          .populate('categoria', 'descripcion')
          .exec( (err, productos) => {
            if (err) {
              return res.status(500).json({
                ok: false,
                err
              })
            }

            res.json({
              ok: true,
              productos
            })

          })
});


// OBTENER PRODUCTO POR ID
app.get('/productos/:id', verificaToken, (req, res) => {
  // todos los productos con usuario y categoria
  let id = req.params.id;

  Producto.findById(id)
          .populate('usuario', 'nombre email')
          .populate('categoria', 'descripcion')
          .exec( (err, productoDB) => {
            if ( err ) {
              return res.status(500).json({
                ok: false,
                err
              })
            }

            if ( !productoDB ) {
              return res.status(500).json({
                ok: false,
                err: {
                  message: 'ID no existe'
                }
              })
            }

            res.json({
              ok: true,
              producto: productoDB
            })
  })
});


// BUSCAR PRODUCTO
app.get('/productos/buscar/:termino', verificaToken, (req, res) => {
  let termino = req.params.termino;

  let regex = new RegExp(termino, 'i');

  Producto.find({ nombre: regex })
          .populate('categoria', 'nombre')
          .exec( (err, productos) => {
            if ( err ) {
              return res.status(500).json({
                ok: false,
                err
              })
            }

            res.json({
              ok: true,
              productos
            })
          })
})


// CREAR PRODUCTO
app.post('/productos', verificaToken, (req, res) => {
  // guardar usuario y categoria
  let body = req.body;

  let producto = new Producto({
    usuario:      req.usuario._id,
    nombre:       body.nombre,
    precioUni:    body.precioUni,
    descripcion:  body.descripcion,
    disponible:   body.disponible,
    categoria:    body.categoria
  });

  producto.save( (err, productoDB) => {
    if(err){
      return res.status(500).json({
        ok: false,
        err
      });
    }

    res.status(201).json({
      ok: true,
      producto: productoDB
    });
  });

});


// ACTUALIZAR PRODUCTO
app.put('/productos/:id', verificaToken, (req, res) => {
  // guardar usuario y categoria
  let id    = req.params.id;
  let body  = req.body;

  Producto.findById(id, (err, productoDB) => {
    if(err){
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if(!productoDB){
      return res.status(400).json({
        ok: false,
        err: {
          message: 'El producto no existe'
        }
      });
    }

    productoDB.nombre       = body.nombre,
    productoDB.precioUni    = body.precioUni,
    productoDB.categoria    = body.categoria,
    productoDB.disponible   = body.disponible,
    productoDB.descripcion  = body.descripcion

    productoDB.save( (err, productoGuardado) => {
      if(err){
        return res.status(500).json({
          ok: false,
          err
        });
      }

      res.json({
        ok: true,
        producto: productoGuardado
      });

    })

  });
});


// ELIMINAR PRODUCTO
app.delete('/productos/:id', [verificaToken, verificaAdmin_Role], (req, res) => {
  // cambiar el estado de disponible
  let id = req.params.id;

  Producto.findById( id, (err, productoDB ) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }

    if (!productoDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'Producto no existe'
        }
      })
    }

    productoDB.disponible = false;

    productoDB.save( (err, productoEliminado) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }

      res.json({
        ok: true,
        producto: productoEliminado,
        mensaje: 'Producto eliminado'
      });

    })
  });
});


module.exports = app;
