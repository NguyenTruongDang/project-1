module.exports = function (gulp, $, browserSync) {
	gulp.task('css-min', function () {
		let cleanCSS = require('gulp-clean-css');
		return gulp.src([
				'./dist/css/*.css',
			])
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe($.rename({
                suffix: '.min'
            }))
			.pipe(gulp.dest('./dist/css'));
	});
};
