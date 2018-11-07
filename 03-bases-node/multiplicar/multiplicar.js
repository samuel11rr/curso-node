// REQUIRES
const fs = require('fs');
const colors = require('colors');


let listarTabla = ( base, limite=10 ) => {

  for (let i = 1; i <= limite; i++) {
    console.log(`${base} x ${i} = ${ base*i }`);
  }

}


let crearArchivo = ( base, limite=10 ) => {
  return new Promise( (resolve, reject) => {

    if ( !Number( base ) ) {
        reject(`El valor ${base} no es un número`);
        return;
    }
    let data = '';

    for (let i = 1; i <= limite; i++) {
      data += `${base} x ${i} = ${ base*i }\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject (err);
      else resolve(`tabla-${base}-al-${limite}.txt`);
    });

  });
}

module.exports = {
  crearArchivo,
  listarTabla
}
