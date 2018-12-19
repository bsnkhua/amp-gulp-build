var gulp = require('gulp');
const del = require('del');

gulp.task('delete', function() {
    del.sync('build/**/*-amp.css');
    del.sync('amp-build/css');
    return del.sync('build/*-amp.html');
});



