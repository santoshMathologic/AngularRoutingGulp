var gulp = require("gulp");

var sass = require('gulp-sass');

// Required to minify css
var cssnano = require('gulp-cssnano');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');


var browserSync = require('browser-sync').create();
var inputPath = "public_development";
var outputPath = "public";
