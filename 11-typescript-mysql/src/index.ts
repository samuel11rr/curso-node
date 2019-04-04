import Server from './server/server';
import router from './router/router';
// import MySQL from './mysql/mysql';


const server = Server.init( 3000 );
server.app.use( router );


// no es necesario llamarlo aqui
// MySQL.instance;


server.start( () => {
   
    console.log('Servidor corriendo en puerto 3000');
    
});