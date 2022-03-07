const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const uglifyJs = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const replace = require('gulp-replace');

//  minify html
gulp.task('minifyHtml', () => {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('public'));
});
gulp.task('minifyHtmlToRoot', () => {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./'))
});
//  add prefixes to css
gulp.task('autoPrefixer', () => {
    return gulp.src('src/stylesheet/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('public/stylesheet'))
});
//  minify css
gulp.task('minifyCss', () => {
    return gulp.src('public/stylessheet/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('public/stylesheet'));
});

//  minify js

gulp.task("minifyJs", function () {
	return gulp.src('src/js/*.js')
		.pipe(uglifyJs())
		.pipe(gulp.dest('public/js'));
});

// compress images
gulp.task('imageMin', async () => {
    gulp.src('src/assets/images/*',)
        .pipe(imagemin())
        .pipe(gulp.dest('public/assets/images'))
});

gulp.task('replaceString',()=> {
    return gulp.src('./index.html')
      .pipe(replace('./', './public/'))
      .pipe(gulp.dest('./'));
  });

gulp.task('default', gulp.series(['minifyHtml','minifyHtmlToRoot', 'autoPrefixer','minifyJs','minifyCss', 'imageMin','replaceString']));