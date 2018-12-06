const fs = require('fs');



class Ticket {
    constructor( numero, escritorio ){
        this.numero     = numero;
        this.escritorio = escritorio;
    } // termina constructor
}; // termina class Ticket



class TicketControl {
    constructor(){
        this.ultimo   = 0;
        this.hoy      = new Date().getDate();
        this.tickets  = [];
        this.ultimos4 = [];


        let data = require('../data/data.json');

        if ( data.hoy === this.hoy ) {
            this.ultimo   = data.ultimo;
            this.tickets  = data.tickets;
            this.ultimos4 = data.ultimos4;
        } else {
            this.reiniciarConteo();
        }
    } // temina constructor


    siguiente(){
        this.ultimo += 1;

        let ticket = new Ticket( this.ultimo, null );

        this.tickets.push(ticket);


        this.grabarArchivo();

        return `Ticket ${ this.ultimo }`;
    } // termina siguiente()


    getUltimoTicket(){
        return `Ticket ${ this.ultimo }`;
    } // termina getUltimoTicket()


    atenderTicket( escritorio ){
        if ( this.tickets.length === 0 ) {
            return 'No hay tickets pendientes';
        }

        let numeroTicket = this.tickets[0].numero;
        this.tickets.shift(); // borra el primer elemento del array

        let atenderTicket = new Ticket( numeroTicket, escritorio );

        this.ultimos4.unshift( atenderTicket ); // agrega un elemento al principio del array

        if ( this.ultimos4 > 4 ) {
            this.ultimos4.splice(-1,1); // borra el ultimo elemento del array
        }

        console.log('Ultimos 4', this.ultimos4);

        this.grabarArchivo();

        return atenderTicket;

    } // termina atenderTicket()


    reiniciarConteo(){
        this.ultimo   = 0;
        this.tickets  = [];
        this.ultimos4 = [];

        console.log('Sistema Inicializado');
        this.grabarArchivo();
    } // termina reiniciarConteo()


    grabarArchivo(){
        let jsonData = {
            ultimo:   this.ultimo,
            hoy:      this.hoy,
            tickets:  this.tickets,
            ultimos4: this.ultimos4
        };

        let jsonDataString = JSON.stringify(jsonData);

        fs.writeFileSync('./server/data/data.json', jsonDataString);
    } // termina grabarArchivo()
} // class TicketControl


module.exports = {
  TicketControl
}
