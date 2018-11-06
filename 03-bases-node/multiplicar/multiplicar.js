// REQUIRES
const fs = require('fs');

let crearArchivo = (base) => {
  return new Promise( (resolve, reject) => {

    if ( !Number() ) {

    }
    let data = '';

    for (let i = 1; i <= 10; i++) {
      // console.log(`${base} x ${i} = ${ base*i }`);
      data += `${base} x ${i} = ${ base*i }\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) reject (err);
      else resolve(`tabla-${base}.txt`);
    });

  });
}

module.exports = {
  crearArchivo
}
