var gulp                    = require('gulp');
var notify                  = require('gulp-notify');
var source                  = require('vinyl-source-stream');
var browserify              = require('browserify');
var babelify                = require('babelify');
var ngAnnotate              = require('browserify-ngannotate');
var browserSync             = require('browser-sync').create();
var rename                  = require('gulp-rename');
var templateCache           = require('gulp-angular-templatecache');
var uglify                  = require('gulp-uglify');
var sourcemaps              = require('gulp-sourcemaps');
var merge                   = require('merge-stream');
var cleanCSS                = require('gulp-clean-css');
var cssPrefix               = require('gulp-css-prefix');
var sass                    = require('gulp-sass');
gulp.task('bundle-vendor', function()
{
    return browserify('./src/vendor.js')
        .bundle()
        .pipe(source('vendor.js'))
        .pipe(gulp.dest('../Backend/src/public/assets/js/'));
});

gulp.task('build-vendor', ['bundle-vendor'], function()
{
    return gulp.src('build/vendor.js')
        .pipe(uglify())
        .pipe(gulp.dest('../Backend/src/public/assets/js/'));
});

gulp.task('views', function()
{
    return gulp.src(['./src/**/*.html'])
        .pipe(templateCache('template-cache.js', { module: 'app.templates', standalone: true }))
        .pipe(gulp.dest('./src/config/'));
});

gulp.task('bundle-app', ['views'], function()
{
    return browserify('./src/app.js')
        .transform(babelify, {presets: ['env']})
        .transform(ngAnnotate)
        .bundle()
        .pipe(source('habbo-api.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('build-app', ['bundle-app'], function()
{
    return gulp.src('build/habbo-api.js')
        .pipe(uglify())
        .pipe(gulp.dest('../Backend/src/public/assets/js/'));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.*', ['build-app'])
});

gulp.task('build-complete', ['build-vendor', 'build-app']);
