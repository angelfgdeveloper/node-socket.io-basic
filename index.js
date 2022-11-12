const express = require('express');

// Configuraciones de express con socket.io
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Carpeta publica index.html
app.use(express.static('public'));

// Conexion de socket y envio de mensaje a cliente
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');
  socket.emit('mensaje', 'Bienvenido!!');
});

// Envio masivo de mensajes cada 3segundos
setInterval(() => {
  // emitir mensaje a cliente
  io.emit('mensaje', 'Hola a todos!');
}, 3000);

server.listen(8081, () => {
  console.log('Servidor iniciado en puerto http://localhost:8080');
});