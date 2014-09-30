var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  	res.sendfile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  	console.log('a user connected');

  	// Chat mess
  	socket.on('chat message', function(msg){
    	io.emit('chat message', msg);
  	});

  	// Disconect
  	socket.on('disconnect', function(){
    	console.log('user disconnected');
 	});
});

http.listen(5000, function(){
	console.log('listening on *:5000');
});