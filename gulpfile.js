var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
// var webpack = require('webpack');
// var webpackConfig = require('./webpack.config.js');

gulp.task('templates', function(){
  gulp.src('templates/*.hbs')
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build/js/'));
});

// gulp.task('webpack:build', function(){
  // var myConfig = Object.create(webpackConfig);
  // webpack(myConfig);
// });

gulp.task('watch', function(){
  gulp.watch('./templates/*.hbs', ['templates']);
});

gulp.task('default', ['templates']);
