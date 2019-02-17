var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');


gulp.task('less', function() {
	return gulp.src('dev/less/style.less')
		.pipe(less())
		.pipe(gulp.dest('./build'))
});

gulp.task('browser-sync', function () {
	browserSync.init(['build/*.css'], {
		server: {
			baseDir: './'
		}
	});
});

gulp.task('minify-images', function () {
	gulp.src('dev/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/images'))
});

gulp.task('default', ['less', 'browser-sync', 'minify-images'], function() {
	gulp.watch('dev/less/*.less', ['less']);
});


