var socket = io();

socket.on('connect', function() {
	console.log('Conectado en el servidor!!');
});

socket.on('disconnect', function() {
	console.log('Se perdio la conexion con el servidor');
});

// Enviar información.
socket.emit('sendMessage', {
	user: 'Juan',
	message: 'Hello there!!'
}, function(res) {
	// Si todo sale bien.
	console.log('Se disparo el callback', res);
});

// Escuchar información.
socket.on('sendMessage', function(data) {
	console.log(data);
});