const express = require('express');
const path = require('path');
const http = require('http');
// Dependencia de socket.
const socketIO = require('socket.io')

// Configuraciones.
const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

// Haciendo el index publico.
app.use(express.static(publicPath));

// Levatando el servidor de socket io.
// Cominicación del backend.
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {
	if (err) throw new Error(err);
	console.log(`Servidor corriendo en el puerto ${ port }`);
});
