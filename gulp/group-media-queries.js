var gulp = require('gulp');
var gcmq = require('gulp-group-css-media-queries');

gulp.task('group-media-queries', function () {
    gulp.src('build/css/main.css')
        .pipe(gcmq())
        .pipe(gulp.dest('build/css'));
});
