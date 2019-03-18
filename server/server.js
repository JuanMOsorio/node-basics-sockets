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

// Levatando el servidor de socktet io.
// Cominicación del backend.
let io = socketIO(server);

io.on('connection', (client) => {
	console.log('Usuario conectado!');

	client.on('disconnect', () => {
		console.log('Usuario desconectado!');
	});

	// Escuchando el mensaje.
	client.on('sendMessage', (data) => {
		console.log(data);
	});
});

server.listen(port, (err) => {
	if (err) throw new Error(err);
	console.log(`Servidor corriendo en el puerto ${ port }`);
});
