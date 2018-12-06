const fs = require('fs');

class TicketControl {
    constructor(){
        this.ultimo = 0;
        this.hoy = new Date().getDate();

        let data = require('../data/data.json');

        if ( data.hoy === this.hoy ) {
            this.ultimo = data.ultimo;
        } else {
            this.reiniciarConteo();
        }
    } // temina constructor


    siguiente(){
        this.ultimo += 1;
        this.grabarArchivo();

        return `Ticket ${ this.ultimo }`;
    } // termina siguiente()


    getUltimoTicket(){
        return `Ticket ${ this.ultimo }`;
    } // termina getUltimoTicket()


    reiniciarConteo(){
        let ultimo = 0;
        console.log('Sistema Inicializado');
        this.grabarArchivo();
    } // termina reiniciarConteo()


    grabarArchivo(){
        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy
        };

        let jsonDataString = JSON.stringify(jsonData);

        fs.writeFileSync('./server/data/data.json', jsonDataString);
    } // termina grabarArchivo()
} // class TicketControl


module.exports = {
  TicketControl
}
