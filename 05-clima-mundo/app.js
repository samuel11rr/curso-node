const argv  = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

console.log(argv.direccion);


lugar.getLugarLatLng( argv.direccion )
  .then( resp => console.log(resp) )
  .catch( e => console.log(e) );


clima.getClima( 19.4175093, -99.16191099999999 )
  .then( temp => console.log(temp) )
  .catch( e => console.log(e) );
