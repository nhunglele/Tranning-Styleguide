'use strict';

var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		reload = browserSync.reload,
		uglify = require('gulp-uglify'),
		twig = require('gulp-twig'),
		compass = require('gulp-compass'),
		plumber = require('gulp-plumber'),
		rename = require('gulp-rename');

		// BrowserSync.
		gulp.task('browser-sync', function () {
			browserSync({
				notify: false,
				server:{
					baseDir: '.'
				}
			});
		});

		// Scripts Tasks.
		gulp.task('scripts', function() {
			gulp.src(['js/**/*.js'])
			.pipe(uglify())
			.pipe(gulp.dest('js'));
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
				//.on("end", reload);
				.pipe(reload({stream:true}));
		});

		// HTMl Tasks.
		gulp.task('html', function() {
			gulp.src('components.html')
			.pipe(reload({stream:true}));
		});

		// Twig Tasks.
		gulp.task('twig', function() {
			gulp.src('*.twig')
			.pipe(twig())
			.pipe(gulp.dest('.'))
			//.on("end", reload);
			.pipe(reload({stream:true}));
		});

		gulp.task('watch', function(){
			gulp.watch('js/**/*.js', ['scripts'],reload);
			gulp.watch('scss/**/*.scss', ['compass'],reload);
			gulp.watch('index.twig', ['twig'],reload);
		})
// default
gulp.task('default', ['scripts','compass','browser-sync','twig','html','watch']);