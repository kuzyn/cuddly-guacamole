//////////////////////////////////////
// Simple task to update our views  //
//////////////////////////////////////

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var bs = require('browser-sync').create();

// our browser-sync config + nodemon chain
gulp.task('browser-sync', ['nodemon'], function() {
    bs.init(null, {
        proxy: "http://localhost:3000",
        browser: "chromium-browser",
        port: 4000,
    });
});

// the real stuff
gulp.task('default', ['browser-sync'], function() {
    gulp.watch('./app/_views/**/*.hbs', bs.reload);
    gulp.watch('./app/_public/**/*.js', bs.reload);
    gulp.watch('./app/_public/**/*.css', bs.reload);
    gulp.watch(['./app/**/*.js', './server.js', './bin/www'], ['bs-delay']);
});

// give nodemon time to restart before we reload the page
gulp.task('bs-delay', function() {
    setTimeout(function() {
        bs.reload({
            stream: false
        });
    }, 1500);
});

// our gulp-nodemon task
gulp.task('nodemon', function(cb) {
    var started = false;
    return nodemon({
            script: './bin/www',
            ext: 'js',
            ignore: ['public/**/*.js']
        }).on('start', function() {
            //avoid nodemon being started multiple times
            if (!started) {
                cb();
                started = true;
            }
        })
        .on('crash', function() {
            // console.log('nodemon.crash');
        })
        .on('restart', function() {
            // console.log('nodemon.restart');
        })
        .once('quit', function() {
            // handle ctrl+c without a big weep
            process.exit();
        });
});
