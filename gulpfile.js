/**
 * Created by Tomer on 27/02/2016.
 */

    //Requirements

var gulp = require('gulp');
var server = require('gulp-connect'); // Creates a dev server
var open = require('gulp-open'); //Opens a URL in web browser
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify'); // JSX => JS
var source = require('vinyl-source-stream'); //
var concat = require('gulp-concat'); //Concates files
var eslint =require('gulp-eslint');//Lint JS file, including jsx

var babelify = require('babelify');


    //Config
var config = {
    baseUrl : "http://localhost",
    port: 9100,
    paths : {
        html : "./src/*.html",
        js: "./src/**/*.js",
        css : [
            "node_modules/materialize-css/bin/materialize.css"],/*,
            "node_modules/bootstrap/dist/css/bootstrap-theme.min.css",
            "node_modules/toastr/build/toastr.css",
            "node_modules/jquery-confirm/css/jquery-confirm.css"

        ],*/
        fonts: {
            roboto: "node_modules/materialize-css/dist/font/roboto/*.*"

        },

        images: "./src/images/*",
        favIcon: "./src/favicon.ico",
        dist : "./build",
        mainJs : "./src/main.js"
    }

};

//Start a web server

gulp.task('start-server',function(){
    server.server({
        root : ['build'],
        base : config.baseUrl,
        port : config.port,
        livereload : true

    })
});

gulp.task('open',['start-server'],function(){
        gulp.src('dist/index.html')
        .pipe(open('',{url: config.baseUrl + ":" + config.port }))}
);

gulp.task('publish-html',function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(server.reload())
});


gulp.task('css',function(){
    gulp.src(config.paths.css).
        pipe(concat('bundle.css')).
        pipe(gulp.dest(config.paths.dist + "/css"))
});


gulp.task('images',function(){
    gulp.src(config.paths.images).
        pipe(gulp.dest(config.paths.dist + "/images"))
});

gulp.task('fonts',function(){

    //Send roberto
    gulp.src(config.paths.fonts.roboto)
        .pipe(gulp.dest(config.paths.dist + "/fonts/roboto"));


});

/*
gulp.task('fav',function(){
    gulp.src(config.paths.favIcon).
        pipe(gulp.dest(config.paths.dist))
});
*/
gulp.task('lint',function(){
    return gulp.src(config.paths.js).
        pipe(eslint({config: 'eslint.config.json'})).
        pipe(eslint.format());
});

gulp.task('watch',function(){
    gulp.watch(config.paths.html,['publish-html']);
    gulp.watch(config.paths.js,['bundle-js','lint']);
});

gulp.task('bundle-js',function(){
    return  browserify({
        extensions: ['.js'],
        entries: config.paths.mainJs
    })
        .transform(babelify.configure({
            ignore: /(bower_components)|(node_modules)/,
            presets: ["es2015", "react"]
        }))
        .bundle()
        .on("error", function (err) { console.log("Error : " + err.message); })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist  +"/Scripts"))
        .pipe(server.reload());


});

gulp.task('default',['open','publish-html','bundle-js','images', 'fonts','lint', 'watch','css']);