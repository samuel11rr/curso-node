require('./config/config');

const express     = require('express');
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');
const path        = require('path');

const app         = express();


//midleware
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());


// HABILITAR CARPETA PUBLIC
app.use( express.static( path.resolve( __dirname, '../public' ) ) );


// Configuracion global de rutas
app.use( require('./routes/index') );


mongoose.connect( process.env.URLDB, (err, res) => {
  if (err)  throw err;

  console.log('Base de datos ONLINE');
});


app.listen(process.env.PORT, () => {
  console.log('Escuchando puerto ', 3000);
})
