const { io } = require('../server');

io.on('connection', (client) => {
	console.log('Usuario conectado!');

	// Enviando información.
	client.emit('sendMessage', {
		user: 'Admin',
		message: 'Bienvenido a esta aplicación!!'
	});

	client.on('disconnect', () => {
		console.log('Usuario desconectado!');
	});

	// Escuchando el mensaje.
	client.on('sendMessage', (data, callback) => {

		console.log(data);

		client.broadcast.emit('sendMessage', data);

		// if (data.user) {
		// 	callback({
		// 		resp: 'Todo salio bien',
		// 	});
		// } else {
		// 	callback({
		// 		resp: 'No se llego el user!!'
		// 	});
		// }

	});
});