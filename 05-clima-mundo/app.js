const argv  = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

console.log(argv.direccion);


let getInfo = async ( direccion ) => {
  try {
    let coors = await lugar.getLugarLatLng( direccion );
    let temp = await clima.getClima( coors.lat, coors.lng );

    return `El clima en ${ coors.direccion } es de ${ temp }°C.`;
  } catch (e) {
    return `Hubo un error`;
  }
}

getInfo( argv.direccion )
.then( mensaje => console.log(mensaje) )
.catch( e => console.log(e) );

// lugar.getLugarLatLng( argv.direccion )
//   .then( resp => console.log(resp) )
//   .catch( e => console.log(e) );
//
//
// clima.getClima( 19.4175093, -99.16191099999999 )
//   .then( temp => console.log(temp) )
//   .catch( e => console.log(e) );
