const path = require('path')
const gulp = require('gulp')
const qiniu = require('gulp-qiniu')

const staticPath = path.resolve('./server/public')
const QINIU_ACCESS_KEY = process.env.QINIU_ACCESS_KEY
const QINIU_SECRET_KEY = process.env.QINIU_SECRET_KEY
const QINIU_BUCKET = process.env.QINIU_BUCKET
const qiniuConfig = {
    accessKey: QINIU_ACCESS_KEY,
    secretKey: QINIU_SECRET_KEY,
    bucket: QINIU_BUCKET,
    private: false
}

gulp.task('publish', function() {
    gulp.src(staticPath + '/**/*')
        .pipe(qiniu(qiniuConfig, {
            dir: '/',
            concurrent: 10
        }))
})

gulp.task('default', [ 'publish' ])
