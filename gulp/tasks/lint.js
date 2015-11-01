var gulp = require('gulp');


var jshint = require('gulp-jshint');
var scssLint = require('gulp-scss-lint');
var stylishCSS = require('gulp-scss-lint-stylish2');

// pretty layout
var stylish = require('jshint-stylish');
// useful layout for IntelliJ
var practical = require('jshint-practical');
var config = require('../config').lint;

gulp.task('lint:js', function () {
    return gulp.src( config.js.src )
        .pipe(jshint())
        .pipe(jshint.reporter(practical))
});

gulp.task('lint:scss', function() {
    stylishCSSReporter = stylishCSS( );

    return gulp.src( config.scss.src )
        .pipe( scssLint( { 'config': 'scss-lint-loose.yml', customReport: stylishCSSReporter.issues } ))
        .pipe( stylishCSSReporter.printSummary );
});
