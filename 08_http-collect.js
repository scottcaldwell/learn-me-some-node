var url = process.argv[2];
var http = require('http');
var bl = require('bl');


http.get(url, function callback(res){
  res.pipe(bl(function(err, data){
    console.log(data.length);
    console.log(data.toString());
  }));
});
