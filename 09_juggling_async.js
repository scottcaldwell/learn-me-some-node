var urls= process.argv.slice(2, process.argv.length);
var http = require('http');
var bl = require('bl');
var final_array= [];
var count = 0;

function getData(url, index){
  http.get(url, function(res){
    res.pipe(bl(function(err, data){
      final_array[index] = data.toString();
      if (++count == urls.length){
        printData();
      }
    }));
  });
}

function printData(){
  for (var i = 0; i < final_array.length; i++) {
    console.log(final_array[i]);
  }
}


for(var i = 0; i < urls.length; i++){
  getData(urls[i], i);
}
