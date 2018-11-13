const argv  = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');

console.log(argv.direccion);


lugar.getLugarLatLng( argv.direccion )
  .then( resp => console.log(resp) )
  .catch( e => console.log(e) );
