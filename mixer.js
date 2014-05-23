var through = require('through2');
var gutil = require('gulp-util');


module.exports = function(outname){
  var paths = '';

  var write = function (file, enc, cb){
    if (file.path != "undefined"){
      paths =  paths + '\n' + '@import "' + file.path + '"';
    }
    cb();
  };

  var flush = function(cb){
    console.log(paths);

    var newFile = new gutil.File({
      base: __dirname,
      cwd: __dirname,
      path: __dirname + '/' + outname + '.styl',
      contents: new Buffer(paths)
    });

    this.push(newFile);
    cb();
  };

  return through.obj(write, flush);
};