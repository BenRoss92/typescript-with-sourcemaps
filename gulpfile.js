// Gulp v4

const gulp = require('gulp');
const eslint = require('gulp-eslint');

function log() {
    // synchronous tasks are not supported in Gulp 4 - needs to return something asynchronous
    
    // make it async
    return new Promise(function (resolve) {
        console.log('RAN THE LOG TASK!');
        resolve();
    });
}

function copyFiles() {
    // return the stream (needs an async return value)
    return gulp
        // select all of the files in all folders and sub-folders
        .src('./src/ts/**/*')
        .pipe(
            gulp.dest('./public/ts')
        );
}

function jshint() {
    return gulp
        .src('./src/js/**/*')
        .pipe(
            eslint({
                'rules': {
                    'no-console': 2
                }
            })
        ).pipe(
            eslint.format()
        ).pipe(
            eslint.failOnError()
        );
} 

function lintJs() {
    return gulp.watch('./src/**/*', jshint);
}

module.exports = {
    // when calling the log task, make it perform the copyFiles task first
    log: gulp.series(copyFiles, log),
    copyFiles,
    lintJs,
};
