var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('amp', function() {
    runSequence(
        'clean-amp',
        'copy-amp',
        'sass-amp',
        'server-amp',
        'copy-amp:watch',
        'sass-amp:watch'
    );
});
