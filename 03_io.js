var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var string = buf.toString();

var array = string.split('\n');
var numNewlines = array.length - 1;

console.log(numNewlines);
