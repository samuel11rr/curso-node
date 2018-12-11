const { io }        = require('../server');
const { Usuarios }  = require('../classes/usuarios');

const usuarios = new Usuarios();


io.on('connection', ( client ) => {

    client.on('entrarChat', ( data, callback ) => {

        if ( !data.nombre ) {
            return callback({
              error: true,
              mensaje: 'El nombre es necesario'
            });
        }

        let personas = usuarios.agregarPersona( client.id, data.nombre );

        client.broadcast.emit('listaPersona', usuarios.getPersonas());

        callback( personas );
    });



    client.on('disconnect', () => {
        let personaEliminada = usuarios.borrarPersona( client.id );

        client.broadcast.emit('crearMensaje', { usuario: 'Admin', mensaje: `${ personaEliminada.nombre } abandonó el chat` });
        client.broadcast.emit('listaPersona', usuarios.getPersonas());

    });
});
