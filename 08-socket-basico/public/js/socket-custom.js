var socket = io();


// on PARA ESCUCHAR SUCESOS
socket.on('connect', function() {
  console.log('CONECTADO AL SERVIDOR');
});

socket.on('disconnect', function(){
  console.log('SERVIDOR DESCONECTADO');
});


// emit PARA ENVIAR INFORMACION
socket.emit('enviarMensaje', {
  usuario: 'Samuel',
  mensaje: 'Hola mundo'
}, function( resp ){
  console.log('SERVER: ', resp);
});


// ESCUCHAR INFORMACION
socket.on('enviarMensaje', function(mensaje) {
  console.log('SERVER: ', mensaje);
});
