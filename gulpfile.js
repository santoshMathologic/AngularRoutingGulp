var gulp        = require("gulp"),
    gutil       = require('gulp-util');

//var sass = require('gulp-sass');

// Required to minify css
//var cssnano = require('gulp-cssnano');
//var less = require('gulp-less');
//var concat = require('gulp-concat');
//var minify = require('gulp-minify-css');
//var merge = require('merge-stream');
//var useref = require('gulp-useref');
//var uglify = require('gulp-uglify');
//var gulpIf = require('gulp-if');


var browserSync = require('browser-sync').create();
var inputDirectoryPath = "public_development"+ '/';
var outputPathDirectoryPath = "public"+ "/";

gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

// Live-Sync on browser
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: outputPathDirectoryPath
        },
    })
});