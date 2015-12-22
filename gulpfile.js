// REQUIRES
var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    sourcemaps  = require('gulp-sourcemaps'),
    jade        = require('gulp-jade'),
    coffee      = require('gulp-coffee');

// PATHS
var path = {
    src       : './src',
    dist      : './public',
}

path.jade = {
    src       : path.src + '/jade',
    dist      : path.dist,
}

path.js = {
    src       : path.src + '/coffee',
    dist      : path.dist,
}

// TASKS
gulp.task('html', function() {
    return gulp.src(path.jade.src + '/**/*.jade')
    .pipe(jade({
        pretty: true
    }).on('error', gutil.log))
    .pipe(gulp.dest(path.jade.dist))
});

gulp.task('js', function() {
    return gulp.src(path.js.src + '/**/*.coffee')
        .pipe(sourcemaps.init())
        .pipe(coffee({
            bare: true
        })).on('error', gutil.log)
        .pipe(sourcemaps.write('/',{
            includeContent: false,
            sourceRoot: function(file) {
                return file.relative + '.map';
            }
        }))
        .pipe(gulp.dest(path.js.dist));
});

gulp.task('default', ['html', 'js']);
