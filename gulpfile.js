var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	compass = require('gulp-compass'),
	twig = require('gulp-twig');

var reload = browserSync.reload;

gulp.task('server', function(){
	browserSync({
		notify: false,
		server: {
			baseDir: '.'
		}
	});
});

// gulp.task('sass', function () {
// 	gulp.src('scss/styles.scss')
// 		.pipe(sass())
// 		.pipe(gulp.dest('css'))
// 		.on('end', reload);
// });

gulp.task('twig', function () {
    gulp.src('index.twig')
	    .pipe(twig())
	    .pipe(gulp.dest('.'))
	    .on('end', reload);
});

gulp.task('compass', function() {
  gulp.src('scss/styles.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'scss',
      require: ['susy']
    }))
    .pipe(gulp.dest('css'))
    .on('end', reload);
});

gulp.task('watch', function () {
	// gulp.watch('scss/styles.scss', ['compass']);
    gulp.watch('index.twig', ['twig']);
	gulp.watch(['index.html'], reload);
	gulp.watch(['scss/**/*.scss'], ['compass']);
	gulp.watch(['js/*.js'], reload);
});

gulp.task('default', ['server', 'compass', 'twig', 'watch']);