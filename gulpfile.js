const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

sass.compiler = require('sass'); // Nécessaire pour utiliser le compilateur Sass

gulp.task('styles', () => {
    return gulp.src('scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('minify-css', () => {
    return gulp.src('./css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', gulp.series('styles', function() {
    gulp.watch('scss/*.scss', gulp.series('styles'));
}));

gulp.task('default', gulp.series('styles', 'minify-css', 'watch'));