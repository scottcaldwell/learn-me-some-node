// * Export a single function that takes exactly the arguments described.
//   * Call the callback exactly once with an error or some data as described.
//   * Don't change anything else, like global variables or stdout.
//   * Handle all the errors that may occur and pass them to the callback.

var fs = require('fs');
var path = require('path');

module.exports = function(dirname, filter, callback) {
  var fileArray = [];
  filter = '.' + filter;

  fs.readdir(dirname, function(err, list) {
    if (err){
      return callback(err);
    }
      list.forEach(function(file){
        if(path.extname(file) === filter){
          fileArray.push(file);
        }
      });
      return callback(null, fileArray);
  });

};
