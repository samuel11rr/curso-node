// COMANDO PARA ESTABLECER LA CONEXION
var socket = io();

var label = $('#lblNuevoTicket');



socket.on('connect', function() {
    console.log('CONECTADO AL SERVIDOR');
});

socket.on('disconnect', function() {
    console.log('DESCONECTADO DEL SERVIDOR');
});


socket.on('estadoActual', function( resp ) {
  // console.log(resp);
  label.text( resp.actual );
});


$('button').on('click', function(){
    console.log('click');

    socket.emit('siguienteTicket', null, function( siguienteTicket ){
        label.text( siguienteTicket );
    });
});
