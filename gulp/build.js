var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function() {
    runSequence(
        'clean',
        'clean-amp',
        'copy',
        'copy-amp',
        'sass',
        'sass-amp-build',
        'group-media-queries',
        'minify-css',
        'inject',
        'imagemin',
        'delete'
    );
});
