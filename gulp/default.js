var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
    runSequence(
        'clean',
        'copy',
        'copy-amp',
        'sass',
        'server',
        'copy:watch',
        'sass:watch'
    );
});
