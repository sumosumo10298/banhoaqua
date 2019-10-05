const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

function html() {
  return src('./*.html')
    .pipe(dest('build/html'))
}

function css() {
  return src('sass/*.sass')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('dist/css'))
}

function js() {
  return src('js/*.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('js', { sourcemaps: true }))
}

// watch(['sass/*.scss'],null, css)

exports.js = js;
exports.css = css;
exports.default = parallel(css);