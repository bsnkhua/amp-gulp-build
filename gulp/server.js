var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "build/",
            directory: true
        },
        files: ['build/*.html', 'build/*.css', 'build/images/*.*']
    });
});

// Static server
gulp.task('server-amp', function() {
    browserSync.init({
        server: {
            baseDir: "amp-build/",
            directory: true
        },
        files: ['amp-build/*.html', 'amp-build/images/*.*']
    });
});
