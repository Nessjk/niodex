var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var uglify = require("gulp-uglify");

// Static Server + watching scss/html files
gulp.task('serve', function() {

  browserSync.init({
      server: "./public"
  });

  gulp.watch("scss/**/*.scss", ['sass']);
  gulp.watch("public/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("scss/styles.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("public/css"))
    .pipe(browserSync.stream());
});

// JS minify
gulp.task('minify-js', function () {
  gulp.src('./scripts/*.js') // path to your files
  .pipe(uglify())
  .pipe(gulp.dest('public/js'));
});

gulp.task('default', ['sass', 'minify-js', 'serve']);

gulp.task('build', ['sass', 'minify-js']);