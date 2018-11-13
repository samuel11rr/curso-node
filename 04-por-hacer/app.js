// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0];

switch ( comando ) {
  case 'crear':
    let tarea = porHacer.crear( argv.descripcion );
    console.log( tarea );
    break;

    case 'listar':

      let listado = porHacer.getListado();

      for ( let tarea of listado ) {
        console.log('###### POR HACER ######'.green);
        console.log(tarea.descripcion);
        console.log(`Estado: ${ tarea.completado }`);
        console.log('======================');
      }

      break;

    case 'actualizar':
      console.log('actualizar una tarea');
      break;
  default:
  console.log('Comando no reconocido');
}
