const { io } = require('../server');

io.on('connection', (client) => {
  console.log('USUARIO CONECTADO');
  client.emit('enviarMensaje', {
    usuario: 'ADMIN',
    mensaje: 'Bienvenido!'
  });

  client.on('disconnect', () => {
    console.log('USUARIO DESCONECTADO');
  });


  // ESCUCHAR CLIENTE
  client.on('enviarMensaje', (data, callback) => {
    console.log(data);

    client.broadcast.emit('enviarMensaje', data);

    // if ( mensaje.usuario ) {
    //   callback({
    //     resp: 'ENVÍO CORRECTO'
    //   });
    // } else {
    //   callback({
    //     resp: 'ERROR'
    //   });
    // }
  })
});
