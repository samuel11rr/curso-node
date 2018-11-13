const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descipción de una tarea por hacer'
}

const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente una tarea'
}

const argv = require('yargs')
  .command('crear', 'Crea una tarea por hacer', {
    descripcion
  })
  .command('actualizar', 'Actualiza el estado completado de una tarea', {
    descripcion,
    completado
  })
  .command('borrar', 'Elimina una tarea por hacer', {
    descripcion
  })
  .help()
  .argv;


module.exports = {
  argv
}
