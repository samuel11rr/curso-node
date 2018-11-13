const axios = require('axios');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

console.log(argv.direccion);

let encodedUrl = encodeURI( argv.direccion );

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyCASnfgcv2n3JSuAP5uNaEPtKtEAPz-tcI`)
  .then( resp => {

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    console.log( 'Direccion', location.formatted_address );
    console.log( 'Latitud', coors.lat );
    console.log( 'Longitud', coors.lng );
  })
  .catch( e => console.log('error', e) );
