//Gulp files.
"use strict";

var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	//uglify = require('gulp-uglify'),
	twig = require('gulp-twig'),
	compass = require('gulp-compass'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename');

	// BrowserSync.
	gulp.task('browsersync', function () {
		browserSync({
			notify: false,
			server:{
				baseDir: '.'
			}
		});
	});

	// Compass Tasks.
	gulp.task('compass', function() {
		gulp.src('scss/styles.scss')
			.pipe(plumber())
			.pipe(compass({
				config_file: './config.rb',
				css: 'css',
				sass: 'scss',
				require: ['susy']
			}))

			.pipe(gulp.dest('css/'))
			.pipe(reload({stream:true}));
	});

	// Twig Tasks.
	gulp.task('twig', function() {
		gulp.src('template/*.twig')
		.pipe(twig())
		.pipe(gulp.dest('./'))
		.pipe(reload({stream:true}));
	});

	// Twig Components Tasks.
	gulp.task('twig_components', function() {
		gulp.src('components/**/*.twig')
		.pipe(twig())
		.pipe(gulp.dest('components/'))
		.pipe(reload({stream:true}));
	});

	gulp.task('watch', function(){
		gulp.watch('js/**/*.js', ['scripts'],reload);
		gulp.watch('scss/**/*.scss', ['compass'],reload);
		gulp.watch(['template/index.twig','template/layout/**/*.twig'], ['twig'],reload);
		gulp.watch('components/**/*.twig', ['twig_components'],reload);
	});

// Default Tasks
gulp.task('default', ['compass','browsersync','twig_components','twig','watch']);