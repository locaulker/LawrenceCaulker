import gulp from 'gulp';
import yargs from 'yargs';
import gulpIf from 'gulp-if';
// import jquery from 'jquery';

// Styles: SCSS files to CSS
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';

// Image Compression
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import jpegRecompress from 'imagemin-jpeg-recompress';

// Delete Folders/Files from the "src" folder
import del from 'del';

// JavaScript: Bundling JS/ES6 modules using Webpack
import webpack from 'webpack-stream';
import uglify from 'gulp-uglify';
import named from 'vinyl-named';

// Browser Reload on save
import browserSync from 'browser-sync';

// Zip
import zip from 'gulp-zip';



//Server: a BrowserSync mini server
const server = browserSync.create();
const siteName  = 'lawrencecaulker';
const userName  = 'ceativeDev';

// yargs: Sets Development or Production Mode
const PRODUCTION  = yargs.argv.prod;

const paths = {
  styles: {
    src: ['src/assets/scss/main.scss'],
    dest: 'dist/assets/css'
  },

  images: {
    src: 'src/assets/images/**/*.{jpg,jpeg,png,svg,gif}',
    dest: 'dist/assets/images'
  },

  scripts: {
    src: ['src/assets/js/App.js'],
    dest: 'dist/assets/js'
  },

  others:  {
    src:  [
      'src/assets/**/*',
      '!src/assets/{images,js,scss}',
      '!src/assets/{images,js,scss}/**/*'
    ],
    dest: 'dist/assets'
  },

  package: {
    src: [
      '**/*',
      '!.vscode',
      '!node_modules{,/**}',
      '!packaged{,/**}',
      '!src{,/**}',
      '!.babelrc',
      '!.gitignore',
      '!.DS_Store',
      '!gulpfile.babel.js',
      '!package.json',
      '!package-lock.json',
      '!README.md'
    ],
    dest: 'packaged'
  }
}


// Task: Initializing BrowserSync Server
export const serve = (done) => {
  server.init({
    proxy: 'https://' + siteName + '.test',
    host: siteName + '.test',
    open: 'external',
    // port: 3000,
    https: {
      key:
        '/Users/' + userName + 
        '/.config/valet/Certificates/' + siteName +
        '.test.key',
      cert:
        '/Users/' + userName + 
        '/.config/valet/Certificates/' + siteName +
        '.test.crt',
    }
  });
  done();
}

// Task: BrowserSync Server Reload
export const reload = (done) => {
  server.reload();
  done();
}


/**
 * The 'clean' task will:
 * - use the 'del' function/task to:
 *  - delete all files/folders before 
 *  - running any tasks
 */
export const clean = () => del(['dist']);


// Task for Styles
export const styles = () => {
  return gulp.src(paths.styles.src)
    .pipe(gulpIf(!PRODUCTION, sourcemaps.init()))
    .pipe(sass({
        outputStyle:  'expanded'
      }).on('error', sass.logError))
    .pipe(gulpIf(PRODUCTION, cleanCSS({compatibility: 'ie8'})))
    .pipe(gulpIf(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(server.stream());
}


// Task for Image Compression
export const images = () => {
  return gulp.src(paths.images.src)
    .pipe(gulpIf(PRODUCTION, imagemin([
      imagemin.gifsicle(),
      imagemin.jpegtran(),
      imagemin.optipng(),
      imagemin.svgo(),
      pngquant(),
      jpegRecompress()
    ])))
    .pipe(gulp.dest(paths.images.dest));
}


/**
 * Copy task: 
 * - To Copy Other Files & Folders but,
 * - Exclude: images, js and scss folders
 */ 
export const copy = () => {
  return gulp.src(paths.others.src)
    .pipe(gulp.dest(paths.others.dest))
}


// JavaScript: Bundling JS/ES6 modules using Webpack
export const scripts = () => {
  return gulp.src(paths.scripts.src)
    .pipe(named())
    .pipe(webpack({
      module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      output: {
        filename: '[name].js'
      },
      externals: {
        $:  'jquery',
        jQuery: 'jquery'
      },
      devtool: !PRODUCTION ? 'inline-source-map' : false,
      mode: PRODUCTION ? 'production' : 'development'
    }))
    .pipe(gulpIf(PRODUCTION, uglify()))
    .pipe(gulp.dest(paths.scripts.dest));
}


// Package: Zip required files and folders for production
export const compress = () => {
  return gulp.src(paths.package.src)
    .pipe(zip('siteName.zip'))
    .pipe(gulp.dest(paths.package.dest));
}


/**
 * WATCHING Files and Folders during development
 * - Run the "styles" task when anything changes in the scss files and folders
 * - Run the "scripts" task when changes occur in js files and folders
 * - Run the "images" task when images are added or deleted
 * - Run the "copy" task when OTHER changes occur in the assets folder
 */
export const watch = () => {
  gulp.watch('src/assets/scss/**/*.scss', styles);
  gulp.watch('src/assets/js/**/*.js', gulp.series(scripts, reload));
  gulp.watch('**/*.html', reload);
  gulp.watch(paths.images.src, gulp.series(images, reload));
  gulp.watch(paths.others.src, gulp.series(copy, reload));
}


/**
 * DEVELOPMENT & PRODUCTION
 * The "dev" task will clean, build and watch files and folders
 * The "build" task will clean the dist folder before running any tasks
 * - series() function will run tasks sequentially in the order specified
 * - parallel() function will run tasks concurrently
 */
export const dev = gulp.series(clean, gulp.parallel(styles, scripts, images, copy), serve, watch);
export const build = gulp.series(clean, gulp.parallel(styles, scripts, images, copy));
export const bundle = gulp.series(build, compress);

export default dev;