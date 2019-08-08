// Gulp v3

const gulp = require('gulp');

gulp.task('log', function(done) {
    console.log('RAN THE LOG TASK!');
    done();
});

gulp.task('copyFiles', function(done) {
    gulp.src('./src/**/*')
        .pipe(gulp.dest('./public'));
        done();
});