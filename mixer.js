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
    gutil.log(gutil.colors.cyan(paths));

    var newFile = new gutil.File({
      path: process.cwd() + '/' + outname + '.styl',
      contents: new Buffer(paths)
    });

    this.push(newFile);
    cb();
  };

  return through.obj(write, flush);
};
