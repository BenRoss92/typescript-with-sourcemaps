// Gulp v4

const gulp = require('gulp');

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
        .src('./src/**/*')
        .pipe(
            gulp.dest('./public/')
        );
}

module.exports = {
    log,
    copyFiles,
};
