const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
  let data = JSON.stringify( listadoPorHacer );

  fs.writeFile('db/data.json', data, (err)=>{
    if (err) throw new Error('Error al guardar', err);
  })
}

const crear = ( descripcion ) => {

  let porHacer = {
    descripcion,
    completado: false
  };

  listadoPorHacer.push( porHacer );
  guardarDB();

  return porHacer;
}


module.exports = {
  crear
}
