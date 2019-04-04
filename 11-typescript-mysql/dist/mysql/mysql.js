"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// PATRON SIGLETON
// DOCUMENTACION https://github.com/mysqljs/mysql
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.connected = false;
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
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static executeQuery(query, callback) {
        this.instance.connection.query(query, (err, results, fields) => {
            if (err) {
                console.log('Error en query', err);
                return callback(err);
            }
            if (results.length === 0) {
                console.log('No existe el registro solicitado');
            }
            else {
                callback(null, results);
            }
        });
    }
    connectDB() {
        this.connection.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.connected = true;
            console.log('DB online!');
        });
    }
}
exports.default = MySQL;
