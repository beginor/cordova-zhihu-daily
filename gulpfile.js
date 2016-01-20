var gulp = require('gulp'),
    del = require('del'),
    tsc = require('gulp-typescript'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('cp:systemjs', function () {
    gulp.src([
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/systemjs/dist/system.js',
        'node_modules/systemjs/dist/system.js.map'
    ]).pipe(gulp.dest('www/libs/systemjs'));
});

gulp.task('cp:rxjs', function () {
    gulp.src([
        'node_modules/rxjs/bundles/*.*'
    ]).pipe(gulp.dest('www/libs/rxjs'));
});

gulp.task('cp:es6-shim', function () {
    gulp.src([
        'node_modules/es6-shim/es6-shim.js',
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/es6-shim/es6-shim.map'
    ]).pipe(gulp.dest('www/libs/es6-shim'));
});

gulp.task('cp:angular2', ['cp:systemjs', 'cp:rxjs', 'cp:es6-shim'], function () {
    gulp.src([
        'node_modules/angular2/bundles/*.*'
    ]).pipe(gulp.dest('www/libs/angular2'));
});

gulp.task('cp:ionic', function() {
    gulp.src([
        'node_modules/ionic-framework/bundles/*.*'
    ]).pipe(gulp.dest('www/libs/ionic/bundles/'));
    gulp.src([
        'node_modules/ionic-framework/bundles/fonts/*.*'
    ]).pipe(gulp.dest('www/libs/ionic/fonts/'));
    gulp.src([
        'node_modules/ionic-framework/js/*.*'
    ]).pipe(gulp.dest('www/libs/ionic/js/'));
});

gulp.task('ts:app', function() {
    var tsResult = gulp.src('app/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsc({
            "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }));
    return tsResult.js.pipe(sourcemaps.write('./'))
                      .pipe(gulp.dest('www/build/'));
});

gulp.task('cp:app', function () {
    gulp.src('app/**/*.html').pipe(gulp.dest('www/build/'));
});

gulp.task('watch:app', function() {
    gulp.watch(['app/**/*.html', 'app/**/*.ts'], ['cp:app', 'ts:app']);
});

gulp.task('copy', ['cp:angular2', 'cp:ionic', 'cp:app', 'ts:app']);

gulp.task('clean', function () {
    del([
        'www/build/**/*',
        'www/libs/**/*'
    ]);
});

gulp.task('default', ['clean', 'copy']);