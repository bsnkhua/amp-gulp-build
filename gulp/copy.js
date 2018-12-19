var gulp = require('gulp');

gulp.task('copy', function() {
    gulp.src('src/js/*').pipe(gulp.dest('build/js'));
    gulp.src('src/images/*').pipe(gulp.dest('build/images'));
    gulp.src('src/fonts/*').pipe(gulp.dest('build/fonts'));
    return gulp.src('src/*.html').pipe(gulp.dest('build/'));
});

gulp.task('copy:watch', function () {
    gulp.watch('src/**/*', ['copy']);
});


gulp.task('copy-amp', function() {
    gulp.src('src/images/*').pipe(gulp.dest('amp-build/images'));
    gulp.src('src/fonts/*').pipe(gulp.dest('amp-build/fonts'));
    return gulp.src('src/*-amp.html').pipe(gulp.dest('amp-build/'));
});

gulp.task('copy-amp:watch', function () {
    gulp.watch('src/**/*', ['copy-amp']);
});
