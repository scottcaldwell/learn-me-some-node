var mymodule = require('./module.js');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, data) {
  if (err) {
    return console.error('There was an error:', err);
  }
  else{
    data.forEach(function (file) {
      console.log(file);
    });
  }
});
