const gulp = require('gulp')

const del = require('del')

const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

const less = require('gulp-less')
const LessAutoprefix = require('less-plugin-autoprefix')
const concatCss = require('gulp-concat-css')
const cleanCSS = require('gulp-clean-css')
const cssnano = require('gulp-cssnano')
const px2rem = require('gulp-px3rem')

const rev = require('gulp-rev')
const size = require('gulp-size')
const revReplace = require('gulp-rev-replace')
const jsonConcat = require('gulp-json-concat')

const config = require('./gulpfile.default')
const autoprefix = new LessAutoprefix({
    browsers: [
        '>1%',
        'last 3 versions',
        'Firefox ESR',
        'not ie < 9' // React doesn't support IE8 anyway
    ]
})

const libraryGulpfile = require('./library.production.js')

module.exports = function production() {
    gulp.task('clean', function() {
        del.sync([config.clean])
    })

    gulp.task('javascript', function() {
        return gulp.src(config.entry.javascript)
            .pipe(concat('main.js'))
            .pipe(uglify())
            .pipe(rev())
            .pipe(gulp.dest(config.output.javascript))
            .pipe(rev.manifest('../javascript.output.json'))
            .pipe(gulp.dest(config.output.javascript))
            .pipe(size({ title: 'javascript', pretty: true }))
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
            .pipe(rev())
            .pipe(gulp.dest(config.output.stylesheet))
            .pipe(rev.manifest('../stylesheet.output.json'))
            .pipe(gulp.dest(config.output.stylesheet))
            .pipe(size({ title: 'stylesheet', pretty: true }))
    })

    const libraryClean = libraryGulpfile()

    gulp.task('assets', [ 'javascript', 'stylesheet', 'library' ], function() {
        return gulp.src(config.clean + '/*.output.json')
            .pipe(jsonConcat('assets.json', function(data) {
                const json = Object.keys(data).reduce((accumulator, cur) => {
                    return Object.assign(accumulator, data[cur])
                }, {})
                return new Buffer(JSON.stringify(json, null, '    '))
            }))
            .pipe(gulp.dest(config.clean + '/'))
    })

    gulp.task('sweep', ['assets'], function() {
        del.sync([
            config.clean + '/javascript.output.json',
            config.clean + '/assets.static.json',
            config.clean + '/stylesheet.output.json'
        ].concat(libraryClean))
    })

    gulp.task('default', ['clean', 'sweep'])
}
