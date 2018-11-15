require('./config/config');

const express     = require('express');
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');

const app         = express();


//midleware
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.json('Hello World');
});

app.get('/usuario', function (req, res) {
  res.json('GET Usuario');
});

app.post('/usuario', function (req, res) {
  let body = req.body;

  if ( body.nombre === undefined ) {
    res.status(400).json({
      ok: false,
      mensaje: 'El nombre es necesario'
    });
  } else {
    res.json({
      persona: body
    });
  }
});

app.put('/usuario/:id', function (req, res) {
  let id = req.params.id;

  res.json({id});
});

app.delete('/usuario', function (req, res) {
  res.json('DELETE Usuario');
});


mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
  if (err)  throw err;

  console.log('Base de datos ONLINE');
});


app.listen(process.env.PORT, () => {
  console.log('Escuchando puerto ', 3000);
})
