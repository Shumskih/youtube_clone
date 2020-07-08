'use strict';  
var gulp        = require('gulp'),              //есть
     
	concat       = require('gulp-concat'),		//есть
	rename       = require('gulp-rename'),		//есть
	del          = require('del'),				//есть
	cache        = require('gulp-cache'),		//есть
	 
	uglify      = require('gulp-uglifyjs'),       //есть   
	rigger      = require('gulp-rigger'),       //нет
	sass        = require('gulp-sass'),         //есть
	sourcemaps  = require('gulp-sourcemaps'),     //нет
	//cssmin      = require('gulp-minify-css'),      //есть   старый
	cssnano      = require('gulp-cssnano'),		 //есть
	imagemin    = require('gulp-imagemin'),      //есть
	pngquant    = require('imagemin-pngquant'),  //есть   
	//spritesmith = require('gulp.spritesmith'),   //нет
	plumber     = require('gulp-plumber'),      //есть
	autoprefixer = require('gulp-autoprefixer'),
	copy = require('gulp-contrib-copy'),
	browserSync = require('browser-sync');
	
let path = {
	js: [
		'assets/js/libs/jquery.min.js',
		'assets/js/libs/popper.min.js',
		'assets/js/libs/bootstrap.min.js',
		'assets/js/common.js'
	],
	js_build: 'assets/js/',
	
	// scripts: ['templates/.default/**/*.js'],
	// scripts_build: '',
	
	css: ['assets/sass/style.sass', '!node_modules/**/*.sass'],
	css_build: ['assets/css/'],
	
	// img: 'gulp/app/images/**/*',
	// img_build: 'gulp/dist/images',

	php: ['*.php', '**/*.php'],
}

// Local Server
gulp.task('browser-sync', function () {
	browserSync({
		notify: false,
		proxy: 'youtube-clone.test',
		// open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	})
});

// PHP Live Reload
gulp.task('code', function () {
	return gulp.src(path.php)
		.pipe(browserSync.reload())
});

gulp.task('js:build', function (done) {
		gulp.src(path.js)   // Найдем наш main файл
		.pipe(plumber())
		.pipe(rigger())    // Прогоним через rigger
		.pipe(concat('scripts.js'))
		.pipe(sourcemaps.init())   // Инициализируем sourcemap
		// .pipe(uglify())    // Сожмем наш js
		.pipe(sourcemaps.write())       // Пропишем карты
		.pipe(plumber.stop())
		.pipe(gulp.dest(path.js_build)) // Выплюнем готовый файл в build

	done()
});

// gulp.task('scripts', function(done) {
// 	return gulp.src(path.scripts)
// 		.pipe(plumber())
//         .pipe(rigger())    // Прогоним через rigger
//         .pipe(uglify())    // Сожмем наш js
//         .pipe(plumber.stop())
//         .pipe(gulp.dest(path.scripts_build)) // Выплюнем готовый файл в build
// });


gulp.task('css:build', function (done) {
		gulp.src(path.css)            // Выберем наш main.scss         
		.pipe(plumber())         
		.pipe(sourcemaps.init())         // То же самое что и с js
		.pipe(sass())                    // Скомпилируем         
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))       
		.pipe(cssnano())                  // Сожмем         
		.pipe(sourcemaps.write())        // Пропишем карты
		.pipe(plumber.stop())        
		.pipe(gulp.dest(path.css_build)) // И в build
		.pipe(browserSync.stream())

	done()
		});
		

// gulp.task('img:build', function() {
// 	return gulp.src(path.img) // Берем все изображения из app
// 		.pipe(cache(imagemin({ // С кешированием
// 			interlaced: true,
// 			progressive: true,
// 			svgoPlugins: [{removeViewBox: false}],
// 			use: [pngquant()]
// 		})))
// 		.pipe(gulp.dest(path.img_build)); // Выгружаем на продакшен
// });

gulp.task('clear', function (callback) {
	return cache.clearAll();
})

gulp.task('watch',  function() {
	gulp.watch(path.css, gulp.parallel('css:build'));
	// gulp.watch(path.img, gulp.parallel('img:build'));
	gulp.watch(path.js, gulp.parallel('js:build'));
	gulp.watch(path.php, gulp.parallel('code'));
});

gulp.task('default', gulp.parallel('watch', 'css:build', 'js:build', 'browser-sync'));
