let gulp = require('gulp'),
    browserSync = require('browser-sync'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    gcmq = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('jade', function() {
  gulp.src('./app/jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./app'));
  browserSync.reload();
});

gulp.task('less', function() {
  gulp.src(['!app/less/smart-grid.less','app/less/*.less'])
    .pipe(less())
    .pipe(gcmq())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./app/css'));
  browserSync.reload();
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './app'
    },
    notify: false
  })
});

gulp.task('watch', ['browser-sync', 'jade', 'less'], function() {
  gulp.watch('./app/jade/*.jade', ['jade']);
  gulp.watch('./app/less/*.less', ['less']);
  gulp.watch('./app/js/*.js', browserSync.reload)
})
