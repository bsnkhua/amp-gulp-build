var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src('build/*', {read: false})
        .pipe(clean());
});

gulp.task('clean-amp', function () {
    return gulp.src('amp-build/*', {read: false})
        .pipe(clean());
});
