# Get Starter

```
npm install gulp-cli -g && npm install

npm run gulp:dev // only firstly when development or you change some file in `.client/assets`

npm run dll // only firstly when development

npm run init // npm run dll && npm run gulp:dev

npm run dev // start development

npm run deploy // deploy application
```

注意：修改 Node.js 代码后需要刷新页面使热加载生效

# Project Structure

```
.
├── client                      // FE Project
│   ├── assets                  // FE-Project 静态资源
│   ├── home                    // 示例：home 模块
│   ├── user                    // user 模块（可选）
│   ├── ... 更多模块目录（可选）
│   ├── common                  // FE-Porject Webpack 打包公共文件
│   └── README.md
├── config                      // Project Config
├── docs                        // Project Documents
├── server                      // Project Node.js Arch
│   ├── apis                    // swagger apis
│   ├── controllers             // 控制器
│   ├── middlewares             // 中间件
│   ├── models                  // 模型
│   ├── public                  // 公共静态资源
│   │   ├── assets              // 对应 client/assets
│   │   └── bundles             // webpack 打包后的文件
│   ├── utils                   // 工具
│   ├── views                   // 视图
│   │   ├── development         // 开发环境视图文件
│   │   └── production          // 线上环境视图文件
│   ├── services                // Service目录（可选）
│   ├── ... 更多分层目录（可选）
│   └── README.md
├── tests                       // 单元测试（未来加入）
├── logs                        // 日志文件（未来加入）
├── webpack                     // webpack configs
├── publish.statics.js          // 将静态文件引入 HTML 并推到 CDN 脚本文件
├── README.md
├── app.js                      // project 启动文件
├── env.sh                      // 切换测试环境脚本文件
├── package.json
└── webpack.config.js           // webpack 配置文件入口
```

# Some Advices for Project

- 一个好的项目结构方便大家合作开发，能够减轻维护负担
- 请使用 `generator-large-fe` 命令添加相应的模块，如果命令无法满足，需要手动添加文件时，请务必先阅读 `README.md` 文件
- 相应文件内容务必遵循相应示例文件
- 务必全部使用 `ES6` 规范语法，或者　`ES7`、`ES8`... 我们希望拥抱未来的 `Javascript`（`Node` 端暂时不支持`import`,其他 `ES` 的特性取决于你安装的 `Node.js` 版本）
- 禁止使用 `var` 等
- 禁止使用回调，请使用 `Promise` 解决回调问题，你也可以使用 `saync/await`
