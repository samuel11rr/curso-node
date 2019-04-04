// PATRON SIGLETON
// DOCUMENTACION https://github.com/mysqljs/mysql
import mysql = require('mysql');

export default class MySQL {
    
    private static _instance:MySQL;

    connection: mysql.Connection;
    connected: boolean = false;


    constructor(){
        console.log('Clase inicializada');

        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '123456',
            database: 'node_db'
        });
    
        this.connectDB();
    }


    //  prevenimos que se llame a la instancia mas de una vez
    public static get instance(){
        return this._instance || ( this._instance = new this() );
    }



    static executeQuery( query: string, callback: Function ){

        this.instance.connection.query( query, ( err, results:Object[], fields ) => {

            if ( err ) {
                console.log('Error en query', err);

                return callback( err );
            }


            if ( results.length === 0 ) {
                console.log('No existe el registro solicitado');
            } else {
                callback(null, results);
            }

        });

    }



    private connectDB(){
        this.connection.connect( ( err: mysql.MysqlError ) => {

            if ( err ) {
                console.log(err.message);
                return;
            }

            this.connected = true;
            console.log('DB online!');
            
        });
    }
}