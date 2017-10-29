const fs = require('fs')
const path = require('path')
const glob = require('glob')
const nunjucks = require('nunjucks')
const shell = require('shelljs')

const rootSrc = path.resolve(__dirname, '../')
const viewsSrc = path.join(rootSrc, './server/views/development')
const proViewsSrc = path.join(rootSrc, './server/views/production')
const tplPaths = glob.sync(path.join(viewsSrc, './**/*.html'))

const publicSrc = path.join(rootSrc, './server/public')
const bundlesJSON = fs.readFileSync(path.join(publicSrc, './bundles/bundles.json'))
const assetsJSON = fs.readFileSync(path.join(publicSrc, './assets/assets.json'))

let bundles
let assets
try {
    bundles = JSON.parse(bundlesJSON)
    assets = JSON.parse(assetsJSON)
} catch (e) {
    console.log(e)
    bundles = {}
    assets = {}
}

const loader = new nunjucks.FileSystemLoader(viewsSrc)
const env = new nunjucks.Environment(loader, {
    autoescape: true,
    trimBlocks: true,
    lstripBlocks: true
})

function cp(src, dist, callback) {
    shell.exec(`cp -rf ${src} ${dist}`, callback)
}

function rm(src) {
    shell.exec(`rm -rf ${src}`)
}

rm(proViewsSrc + '/*')
cp(viewsSrc + '/*', proViewsSrc, function(code, stdout, stderr) {
    if (code !== 0) {
        console.error(stderr)
    }
    renderStatics(tplPaths)
})

function renderStatics(tplPaths) {
    for (let tpl of tplPaths) {
        let index = tpl.indexOf('/development/') + 13
        let tplPath = tpl.substr(index)
        let tplPathPerfix = tplPath.substr(0, tplPath.length - 5)

        if (!(tplPathPerfix in bundles)) {
            continue
        }

        let key = tplPathPerfix.indexOf('/') ? tplPathPerfix.replace(/\//g, '_') : tplPathPerfix
        let context = {
            isPro: process.env.NODE_ENV === 'production',
            isDev: process.env.NODE_ENV === 'development',
            title: '{{ title }}',
            pageData: '{{ pageData }}',
            bundle_js: bundles.bundle && bundles.bundle.js,
            [`${key}_js`]: bundles[tplPathPerfix] && bundles[tplPathPerfix].js,
            [`${key}_css`]: bundles[tplPathPerfix] && bundles[tplPathPerfix].css,
            main_js: assets['main.js'],
            graphics_css: assets['graphics.css'],
            main_css: assets['main.css']
        }


        env.render(tplPath, context, function(e, res) {
            if (e) {
                console.error(e)
                process.exit()
            }
            fs.writeFileSync(`${proViewsSrc}/${tplPath}`, res)
        })
    }
}

