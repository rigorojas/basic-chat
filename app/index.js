var express = require('express')();
var http = require('http').Server(express);
var socketio = require('socket.io')(http);
var path = require('path');

express.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname,'../public/index.html'));
});

socketio.on('connection', function(socket){
    socket.on('chat message', function(msg){
        socketio.emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
