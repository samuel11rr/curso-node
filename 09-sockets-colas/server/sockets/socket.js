const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl;



// AL CONECTARSE UN CLIENTE
io.on('connection', (client) => {
    client.on('siguienteTicket', (data, callback) => {

        let siguiente = ticketControl.siguiente();
        console.log('ticket: ', siguiente);

        callback(siguiente);
    });


    //estado actual
    client.emit('estadoActual', {
        actual:   ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimos4()
    });


    client.on('atenderTicket', ( data, callback ) => {
        if ( !data.escritorio ) {
            return callback({
                err: true,
                message: 'Escritorio requerido'
            });
        }

        let atenderTicket = ticketControl.atenderTicket( data.escritorio );

        callback( atenderTicket );


        // actualizar los ultimos 4
        client.broadcast.emit('ultimos4', {
            ultimos4: ticketControl.getUltimos4()
        });

    });

}); // termina io.on('connection')
