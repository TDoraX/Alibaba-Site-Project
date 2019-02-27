const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const html = require('gulp-htmlmin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const img = require('gulp-imagemin');
const compass = require('gulp-compass');
const css = require('gulp-clean-css');

const requirejs = require('requirejs');
const rjs = require('gulp-requirejs');

function runSass() {
    return src('src/sass/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'src/css',
            sass: 'src/sass'
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(css())
        .pipe(dest('dist/css/'));
}

function minifyHTML() {
    return src('src/*.html')
        .pipe(html({collapseWhitespace: true}))
        .pipe(dest('dist/'));
}


// function requirejsBuild(done) {
//     requirejs.optimize({
//         baseUrl: 'src/script/js',
//         name: 'app',
//         preserveLicenseComments: false,
//         removeCombined: false,
//         paths: {
//             jquery: '../thirdplugins/jquery.min',
//             app: './app'
//         },
//         out: 'src/script/js/bundle.js'
//     });
//     done();
// }

function operateJS() {
    return src('src/script/js/*.js')
        .pipe(concat('all.js'))
        .pipe(dest('dist/script/js/'))
        .pipe(rename('app.js'))
        .pipe(uglify())
        .pipe(dest('dist/script/js/'));
}

function minifyImg() {
    return src('src/img/*.png')
        .pipe(img())
        .pipe(dest('dist/img/'));
}

function watchOn() {
    watch('src/*.html', {delay: 500}, minifyHTML);
    watch('src/sass/*.scss', {delay: 500}, runSass);
    // watch('src/script/js/*.js', {delay: 500}, requirejsBuild);
    // watch('src/script/js/*.js', {delay: 500}, operateJS);
    watch('src/img/*', {delay: 500}, minifyImg);
}

exports.build = series(runSass, minifyHTML, operateJS, minifyImg);
exports.default = series(runSass, minifyHTML, minifyImg, watchOn);
// exports.compileJS = series(requirejsBuild);



