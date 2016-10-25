var gulp = require('gulp')
var webserver = require('gulp-webserver')
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var minify = require('gulp-minify-css')
var sass = require('gulp-sass')
var concat = require('gulp-concat')
var fontAwesome = require('node-font-awesome')

gulp.task('server', function() {
  gulp.src('./build')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 9090,
      fallback: 'index.html',
      livereload: true
    }))
})

gulp.task('fonts', function() {
  gulp.src(fontAwesome.fonts)
    .pipe(gulp.dest('./build/fonts'));
return gulp.src('./src/lib/fontAwesome/*.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(concat('fontAwesome.css'))
	.pipe(minify())
	.pipe(gulp.dest('./build/css/'))
})

gulp.task('sass', function () {
  return gulp.src('./src/components/**/*.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(concat('style.css'))
	.pipe(minify())
	.pipe(gulp.dest('./build/css/'))
})

gulp.task('build', function() {
  browserify({
    entries: './src/components/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./build/js'))
})

gulp.task('watch', function() {
  gulp.watch('./src/components/**/*.jsx', ['build'])
  gulp.watch('./src/**/*.scss', ['sass'])
})

gulp.task('default', ['fonts', 'server', 'watch'])
