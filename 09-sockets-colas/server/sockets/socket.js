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
        actual: ticketControl.getUltimoTicket()
    });

}); // termina io.on('connection')
