const gulp = require('gulp')

const del = require('del')

const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

const less = require('gulp-less')
const LessAutoprefix = require('less-plugin-autoprefix')
const concatCss = require('gulp-concat-css')
const cleanCSS = require('gulp-clean-css')
const px2rem = require('gulp-px3rem')
const cssnano = require('gulp-cssnano')

const config = require('./gulpfile.default')
const autoprefix = new LessAutoprefix({
    browsers: [
        '>1%',
        'last 3 versions',
        'Firefox ESR',
        'not ie < 9' // React doesn't support IE8 anyway
    ]
})

const libraryGulpfile = require('./library.development.js')

module.exports = function development(){
    gulp.task('clean', function() {
        del.sync([config.clean])
    })

    gulp.task('javascript', function() {
        return gulp.src(config.entry.javascript)
            .pipe(concat('main.js'))
            .pipe(uglify())
            .pipe(gulp.dest(config.output.javascript))
    })

    gulp.task('stylesheet', function() {
        return gulp.src(config.entry.stylesheet)
            .pipe(less({
                plugins: [autoprefix]
            }))
            .pipe(px2rem({ remUnit: 75 }))
            .pipe(cleanCSS({ compatibility: 'ie8' }))
            .pipe(concatCss('main.css'))
            .pipe(cssnano())
            .pipe(gulp.dest(config.output.stylesheet))
    })

    libraryGulpfile()

    gulp.task('default', ['clean', 'javascript', 'stylesheet', 'library' ])
}
