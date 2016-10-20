var gulp = require('gulp'),
		plumber = require('gulp-plumber');

var sass = require('gulp-sass'),
		glob = require('gulp-sass-glob'),
		prefixer = require('gulp-autoprefixer');

var babel = require('gulp-babel');

gulp.task('sass', function() {
	return gulp.src('dev/sass/main.sass')
				.pipe(plumber())
				.pipe(glob())
				.pipe(sass())
				.pipe(prefixer({
		      browsers: ['last 15 versions'],
		      cascade: false
		    }))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('babel', function() {
	return gulp.src('dev/script/*.js')
				.pipe(plumber())
				.pipe(babel({
					presets: ['es2015']
				}))
				.pipe(gulp.dest('dist/script'));
});

gulp.task('markup', function() {
	return gulp.src('dev/*.html')
				.pipe(gulp.dest('dist'))
});

gulp.task('images', function() {
	return gulp.src('dev/images/*')
				.pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
	return gulp.src(['dev/fonts/**/*', '!dev/fonts/*.sass'])
				.pipe(gulp.dest('dist/fonts'))
});

gulp.task('watch', function() {
	gulp.watch('dev/sass/**/*.sass', ['sass']);
	gulp.watch('dev/script/*.js', ['babel']);
	gulp.watch('dev/*.html', ['markup']);
	gulp.watch('dev/images/*', ['images']);
	gulp.watch('dev/fonts/**/*', ['fonts']);
});