var gulp = require('gulp'),
    sass = require('gulp-sass');

var stylesGlob = 'src/css/*.scss';

gulp.task('sass', function(){
    return gulp.src(stylesGlob)
               .pipe(sass()) // Using gulp-sass
               .pipe(gulp.dest('.'));
});

gulp.task('watch', function(){
    return gulp.watch(stylesGlob, ['sass']);
});

gulp.task('default', ['sass']);
