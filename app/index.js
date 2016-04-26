var express = require('express')();
var serveStatic = require('serve-static');
var http = require('http').Server(express);
var socketio = require('socket.io')(http);
var path = require('path');

var appPath = "..";
express.use(serveStatic(path.resolve("..", "public")));

express.get('/', function(req, res){
    res.sendFile("../public/index.html");
});

socketio.on('connection', function(socket){
    socket.on('chat message', function(msg){
        socketio.emit('chat message', msg);
    });
});

http.listen(80, function(){
    console.log('listening on *:80');
});
