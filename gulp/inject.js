var gulp = require('gulp');
var replace = require('gulp-replace');
var fs = require('fs');

gulp.task('inject', function() {
    return gulp.src(['amp-build/index-amp.html'])
    .pipe(replace('<link rel="stylesheet" href="main-amp.css">', function() {
        var css = fs.readFileSync('amp-build/css/main-amp.css', "utf8");

        return '<style amp-custom>\n' + css + '\n</style>'
    }))
    .pipe(gulp.dest('amp-build/'));
});
