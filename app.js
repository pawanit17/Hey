const express = require('express');
const app = express();
var httpserver = require('http').createServer(app);
var io = require('socket.io')(httpserver);

// A connection event is thrown in Socket.io ( actually in the underlying WebSockets framework )
// whenever a user is connected to the chat.
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
      });
});

app.use(express.static('public'));

app.get('/chat', function(req, res) {
    res.sendFile(__dirname + '/public/chat.html');
});

app.get('/tokensignin', function(req, res) {

    console.log( "Hit");
});

// Let this HTTP server listen to all traffic on port 8000.
// Note this should be the HTTP server not the express application.
httpserver.listen(8999);

