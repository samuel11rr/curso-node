const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 6;

crearArchivo(base)
.then( archivo => console.log(`Archivo creado: ${archivo}`) );
