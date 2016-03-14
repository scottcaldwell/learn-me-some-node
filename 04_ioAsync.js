var fs = require('fs');


fs.readFile(process.argv[2], 'utf8', doneReading);

function doneReading(err, fileContents){
  if (err) return console.error(err);

  var numNewLines = fileContents.split('\n').length - 1;
  console.log(numNewLines);
}
