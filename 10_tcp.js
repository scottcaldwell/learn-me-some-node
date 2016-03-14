var port = process.argv[2];
var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
  // socket handling logic
  var date = new Date();
  var stringdate = strftime('%F %R');
  socket.end(stringdate);
});
server.listen(port);
