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

const config = require('./library.config')
const autoprefix = new LessAutoprefix({
    browsers: [
        '>1%',
        'last 3 versions',
        'Firefox ESR',
        'not ie < 9' // React doesn't support IE8 anyway
    ]
})

module.exports = () => {
    // graphics library start
    gulp.task('library:graphics:static', function() {
        return gulp.src(config.entry.library.graphics.static)
            .pipe(gulp.dest(config.output.library.graphics))
    })

    gulp.task('library:graphics:less', [ 'library:graphics:static' ], function() {
        return gulp.src(config.entry.library.graphics.less)
            .pipe(less({
                plugins: [autoprefix]
            }))
            .pipe(px2rem({ remUnit: 75 }))
            .pipe(cleanCSS({ compatibility: 'ie8' }))
            .pipe(cssnano())
            .pipe(gulp.dest(config.output.library.graphics))
    })


    // graphics library end
    gulp.task('library:graphics', [ 'library:graphics:less' ])

    // you can handle more library like this
    gulp.task('library', [ 'library:graphics' ])
}

