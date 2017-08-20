# Get Starter

- 1、参照 chat 模块建立新模块或在 chat 模块下 views 视图文件夹下添加新的页面
- 2、在 webpack/webpack.entry.json 中加入打包入口文件
- 3、添加相应的 controllers （控制器）文件

```
npm install

npm run dll // only firstly when development

npm run dev // start development

npm run deploy // deploy application
```

注意：你也可以跳过上述的 1, 2, 3 直接查看现在的效果（服务端开发请忽略1, 2, 3）

# Project Structure

```
.
├── client                      // FE Project
│   ├── assets                  // FE-Project 静态资源
│   ├── chat                    // 示例：chat 模块
│   ├── user                    // user 模块（可选）
│   ├── group                   // group 模块（可选）
│   ├── topic                   // topic 模块（可选）
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
├── publish.statics.js          // 将静态文件引入HTML并推到CDN脚本文件
├── README.md
├── app.js                      // project 启动文件
├── env.sh                      // 切换测试环境脚本文件
├── package.json
└── webpack.config.js           // webpack 配置文件入口
```

# Some Advices for Project

- 一个好的项目结构方便大家合作开发，能够减轻维护负担
- 若想在某一文件夹添加文件或文件夹之前请先阅读 `README.md` 文件，请务必遵守
- 相应文件内容请遵循相应示例文件
- 务必全部使用 `ES6` 规范语法，或者　`ES7`、`ES8`... 我们希望拥抱未来的 `Javascript`（`Node` 端暂时不支持`import`,其他 `ES` 的特性取决于你安装的 `Node.js` 版本）
- 禁止使用 `var` 等
- 禁止使用回调，请使用 `Promise` 解决回调问题，你也可以使用 `saync/await`
