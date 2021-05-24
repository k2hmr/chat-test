var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server); //追加

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');　//追加
});

server.listen(3000, function(){
  console.log('listening on *:3000');
});