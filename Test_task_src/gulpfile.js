const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const webpack = require('webpack-stream');
const pug = require('gulp-pug');
const data = require('gulp-data');



gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/**/*.pug").on('change', browserSync.reload);
});



gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.reload({ stream:true }));
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/fonts/**/*").on('all', gulp.parallel('fonts'));
    gulp.watch("src/pug/pages/*.pug").on('change', gulp.parallel('pug'));
    gulp.watch("src/js/**/*.js").on('change', gulp.parallel('webpack'));
    gulp.watch("src/icons/**/*").on('all', gulp.parallel('icons'));
    gulp.watch("src/img/**/*").on('all', gulp.parallel('images'));
    gulp.watch("src/**/*.ico").on('all', gulp.parallel('favicon'));
});

gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"))
        .pipe(browserSync.reload({ stream:true }));
});

gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"))
        .pipe(browserSync.reload({ stream:true }));
});

gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.reload({ stream:true }));
});

gulp.task('webpack', function() {
    return gulp.src('src/js/script.js')
      .pipe(webpack({
          output: {
              filename: 'script.js',
            },
        }))
        
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.reload({ stream:true }));
});

gulp.task('favicon', function () {
    return gulp.src("src/**/*.ico")
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.reload({ stream:true }));
});

gulp.task('pug', function() {
    return gulp.src('src/pug/pages/*.pug')
        .pipe(data(function (file) {return {require: require}}))
        .pipe(pug())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({ stream:true }));
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'fonts', 'icons', 'images', 'favicon', 'webpack', 'pug'));