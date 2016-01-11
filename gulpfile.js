var gulp = require('gulp');
var copy = require('gulp-copy');
var del = require('del');

gulp.task('angular2', function () {
    gulp.src([
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/angular2/bundles/angular2-polyfills.min.js',
        'node_modules/angular2/bundles/angular2.js',
        'node_modules/angular2/bundles/angular2.min.js',
        'node_modules/angular2/bundles/router.js',
        'node_modules/angular2/bundles/router.min.js',
        'node_modules/angular2/bundles/http.js',
        'node_modules/angular2/bundles/http.min.js'
    ]).pipe(gulp.dest('www/libs/angular2'));
});

gulp.task('rxjs', function () {
    gulp.src([
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/rxjs/bundles/Rx.min.js',
        'node_modules/rxjs/bundles/Rx.min.js.map'
    ]).pipe(gulp.dest('www/libs/rxjs'));
});

gulp.task('systemjs', function () {
    gulp.src([
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/systemjs/dist/system.js',
        'node_modules/systemjs/dist/system.js.map'
    ]).pipe(gulp.dest('www/libs/systemjs'));
});

gulp.task('es6-shim', function () {
    gulp.src([
        'node_modules/es6-shim/es6-shim.js',
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/es6-shim/es6-shim.map'
    ]).pipe(gulp.dest('www/libs/es6-shim'));
});

gulp.task('bootstrap', function () {
    gulp.src('bower_components/bootstrap/dist/**/*.*')
        .pipe(gulp.dest('www/libs/bootstrap'));
});

gulp.task('jquery', function () {
    gulp.src('bower_components/jquery/dist/**/*.*')
        .pipe(gulp.dest('www/libs/jquery'));
});

gulp.task('tether', function () {
    gulp.src('bower_components/tether/dist/**/*.*')
        .pipe(gulp.dest('www/libs/tether'));
});

gulp.task('copy', ['angular2', 'rxjs', 'systemjs', 'es6-shim', 'bootstrap', 'jquery', 'tether']);

gulp.task('clean', function () {
    del([
        'www/libs/**/*'
    ]);
});

gulp.task('default', ['clean', 'copy']);