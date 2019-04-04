"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const router_1 = require("./router/router");
const mysql_1 = require("./mysql/mysql");
const server = server_1.default.init(3000);
server.app.use(router_1.default);
const mysql = new mysql_1.default();
server.start(() => {
    console.log('Servidor corriendo en puerto 3000');
});
