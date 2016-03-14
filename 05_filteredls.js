var path = require('path');
var fs = require('fs');
var file = process.argv[2];
var extension = '.' + process.argv[3];
fs.readdir(file, doneReading);

function doneReading(err, fileArray) {
  if (err) return console.error(err);

  for (var i = 0; i < fileArray.length; i++) {
    if (path.extname(fileArray[i]) === extension) {
      console.log(fileArray[i]);
    }

  }
}
