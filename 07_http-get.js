var url = process.argv[2];
var http = require('http');

http.get(url, function callback(res){
  res.setEncoding('utf8');
  res.on("data", console.log);
  res.on("error", console.error);
});
