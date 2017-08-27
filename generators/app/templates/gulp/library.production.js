const gulp = require('gulp')

const del = require('del')

const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

const less = require('gulp-less')
const LessAutoprefix = require('less-plugin-autoprefix')
const concatCss = require('gulp-concat-css')
const cleanCSS = require('gulp-clean-css')
const cssnano = require('gulp-cssnano')

const rev = require('gulp-rev')
const size = require('gulp-size')
const revReplace = require('gulp-rev-replace')
const jsonConcat = require('gulp-json-concat')

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
            .pipe(rev())
            .pipe(gulp.dest(config.output.library.graphics))
            .pipe(rev.manifest('../../assets.static.json'))
            .pipe(gulp.dest(config.output.library.graphics))
    })

    gulp.task('library:graphics:less', ['library:graphics:static'], function() {
        const manifest = gulp.src(config.clean + '/assets.static.json')

        return gulp.src(config.entry.library.graphics.less)
            .pipe(less({
                plugins: [autoprefix]
            }))
            .pipe(px2rem({ remUnit: 75 }))
            .pipe(cleanCSS({ compatibility: 'ie8' }))
            .pipe(cssnano())
            .pipe(rev())
            .pipe(revReplace({ manifest: manifest }))
            .pipe(gulp.dest(config.output.library.graphics))
            .pipe(rev.manifest('../../graphics.library.output.json'))
            .pipe(gulp.dest(config.output.library.graphics))
            .pipe(size({ title: 'library:graphics:less', pretty: true }))
    })

    // graphics library end
    gulp.task('library:graphics', ['library:graphics:less'])

    // you can handle more library like this
    gulp.task('library', [ 'library:graphics' ])

    return [ config.clean + 'graphics.library.output.json' ]
}

