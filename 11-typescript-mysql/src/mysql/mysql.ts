// PATRON SIGLETON

import mysql = require('mysql');

export default class MySQL {
    
    private static _intance:MySQL;

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