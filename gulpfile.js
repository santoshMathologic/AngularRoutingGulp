var gulp        = require("gulp"),
    gutil       = require('gulp-util'),
    runSequence = require('run-sequence');



// Required to minify css
var cssnano = require('gulp-cssnano');

var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');
var useref = require('gulp-useref');
var gulpMultinject = require('gulp-multinject');
//var uglify = require('gulp-uglify');
//var gulpIf = require('gulp-if');


var browserSync = require('browser-sync').create();
var inputPath = 'public_development';  // eg.: src  or  src/html
var outputPath = 'public';  // eg.: dist  or public/html

// Adding slash to paths
var output = outputPath + '/';
var input = inputPath + '/';

gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});



// Copy all ng js files
gulp.task('ng', function() {
    console.log("ng is updating");
    return gulp.src(input + 'ng/**/*')
        .pipe(gulp.dest(output + 'ng'))
});


gulp.task('styles', function() {

    var cssStream = gulp.src(input + 'css/**/*.css')
        .pipe(concat('css-files.css'))
        ;

    var mergedStream = merge(cssStream)
        .pipe(concat('styles.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest(output + 'stylesheets'));

    return mergedStream;
});

//Copy lib
gulp.task('lib', function() {
    return gulp.src(input + 'js/lib/*.js')
        .pipe(gulp.dest(output + 'js/lib/'))
})


// This is watch to update the browser in any file changes
gulp.task('watch', ['browserSync', 'styles', 'ng', 'useref'], function() {
    
    gulp.watch(input + 'css/**/*.css', ['styles']);
    gulp.watch(input + 'ng/**/*', ['ng', 'useref']);
    gulp.watch(input + 'js/**/*.js', ['useref']);
    gulp.watch(input + '**/*.html', ['useref']);

    // Reloads the browser whenever HTML or JS files change
    gulp.watch(input + '**/*', browserSync.reload);
    //gulp.watch(input + 'js/**/*.js', browserSync.reload);
});


gulp.task('useref', function() {

    if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == undefined) {
        console.log('In development Mode');
        return gulp.src(input + '*.html')
            .pipe(gulpMultinject([
                'js/lib/' + 'angular.min.js',
                'js/lib/' + 'angular-animate.min.js',
                'js/lib/' + 'angular-route.min.js',
                'js/lib/' + 'angular-aria.min.js',
                'js/lib/' + 'angular-messages.min.js',
                'js/lib/' + 'svg-assets-cache.js',
                'js/lib/' + 'angular-material.min.js',
                'js/lib/' + 'angular-ui-router.min.js',
                'js/lib/' + 'd3.min.js',
                'js/lib/' + 'jquery.min.js'
            ],
                'remoteFiles'
            ))
            .pipe(useref())
            .pipe(gulp.dest(output))
    }
    else {
        console.log('In Production Mode');
        console.log(process.env.NODE_ENV);
        return gulp.src(input + '*.html')

            .pipe(gulpMultinject([
                'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.js',
                'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.min.js',
                'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.min.js',
                'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-aria.min.js',
                'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-messages.min.js',
                'http://ngmaterial.assets.s3.amazonaws.com/svg-assets-cache.js',
                'https://material.angularjs.org/HEAD/angular-material.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router.js',
                'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js'
                

            ],
                'remoteFiles'
            ))
            .pipe(useref())
            .pipe(gulp.dest(output))
    }

});


// Live-Sync on browser
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: output
        },
    })
});


// Clean up: clean {{outputPath}}
gulp.task('clean:' + outputPath, function() {
    return del.sync(outputPath);
});

// Clean everything
gulp.task('cache:clear', function(callback) {
    return cache.clearAll(callback)
});

gulp.task('build', function(callback) {
    runSequence('clean:' + output,
        ['styles', 'lib', 'useref', 'images', 'icons', 'fonts', 'ng'],
        callback
    )
});

gulp.task('default', function(callback) {
    runSequence(['styles', 'lib', 'ng', 'useref', 'browserSync', 'watch'],
        // 'server',
        callback
    )
});
