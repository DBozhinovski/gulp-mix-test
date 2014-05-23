var gulp = require('gulp');
var stylus = require('gulp-stylus');
var mixer = require('./mixer');


gulp.task('mix', function(){
  gulp.src('./src/**/*.styl')
  .pipe(mixer("outfile"))
  .pipe(stylus())
  .pipe(gulp.dest('./out'));
});

gulp.task('default', ['mix']);