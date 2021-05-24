var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server); //追加

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{
  socket.emit('chat message','ようそこチャットアプリへ');
  socket.broadcast.emit('chat message','新しいユーザが接続しました。')
  socket.on('disconnect',function(){
    io.emit('chat message','あるユーザの接続が切れました')
  })
  socket.on('chat message', (msg) =>{
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});