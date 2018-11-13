const argv = require('yargs')
  .command('crear', 'Crea una tarea por hacer', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descipción de una tarea por hacer'
    }
  })
  .command('actualizar', 'Actualiza el estado completado de una tarea', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descipción de una tarea por hacer'
    },
    completado: {
        demand: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente una tarea'
    }
  })
  .command('borrar', 'Elimina una tarea por hacer', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descipción de una tarea por hacer'
    }
  })
  .help()
  .argv;


module.exports = {
  argv
}
