const fs = require('fs')
const path = require('path')
const glob = require('glob')
const nunjucks = require('nunjucks')
const shell = require('shelljs')
const config = require('./config')

const rootSrc = path.resolve(__dirname, './')
const viewsSrc = path.join(rootSrc, './server/views/development')
const staticsSrc = path.join(rootSrc, './server/public')
const assetsJSON = fs.readFileSync(path.join(staticsSrc, './assets.json'))
const tplPaths = glob.sync(path.join(viewsSrc, './**/*.html'))
const proViewsSrc = path.join(rootSrc, './server/views/production')

let assets
try {
    assets = JSON.parse(assetsJSON)
} catch(e) {
    console.log(e)
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

        if (!(tplPathPerfix in assets)) {
            continue
        }

        let key = tplPathPerfix.indexOf('/') ? tplPathPerfix.replace(/\//g, '_') : tplPathPerfix
        let context = {
            isPro: process.env.NODE_ENV === 'production',
            isDev: process.env.NODE_ENV === 'development',
            title: "{{ title }}",
            pageData: "{{ pageData }}",
            bundle_js: assets.bundle && assets.bundle.js,
            [`${key}_js`]: assets[tplPathPerfix] && assets[tplPathPerfix].js,
            [`${key}_css`]: assets[tplPathPerfix] && assets[tplPathPerfix].css
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

