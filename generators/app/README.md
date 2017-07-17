# Usage

```
Description:
    Creates a new project

Example:
    yo large-fe

    This will create:
        project
```

project

```
├── assets                      #　打包后的静态文件
│   └── README.md
├── config                      # 项目配置文件
│   ├── index.js
│   ├── config.dev.js
│   ├── config.pro.js
│   ├── config.tes.js
│   └── config.def.js
├── docs                        # 项目文档
│   └── README.md
├── src
│   ├── components              # 项目的 component
│   │   └── README.md
│   ├── containers              # 项目的 container component
│   │   └── README.md
│   ├── controllers             # 项目的控制器文件
│   │   └── README.md
│   ├── models                  # 项目的模型文件
│   │   └── README.md
│   ├── public                  # 项目公共静态资源
│   │   ├── images              # 项目公共静态资源 - 图片
│   │   │   └── README.md
│   │   ├── javascripts　       # 项目公共静态资源 - javascripts　
│   │   │   └── README.md
│   │   ├── stylesheets         # 项目公共静态资源 - 样式表
│   │   │   ├── fonts           # 项目公共静态资源 - 样式表字体
│   │   │   │   └── README.md
│   │   │   └── README.md
│   │   └── README.md
│   ├── template.dev.html       # 项目开发环境打包 HTML 模板
│   └── template.pro.html       # 项目生产环境打包 HTML 模板
├── views                       # 项目开发环境打包 HTML 模板
│   └── README.md               
├── webpack                     # 项目 webpack 配置文件
│   ├── webpack.def.js
│   ├── webpack.dev.js
│   ├── webpack.dll.js
│   ├── webpack.pro.js
│   └── webpack.tes.js
├── README.md
├── package.json
├── assets.json                 # 静态资源映射表
└── webpack.config.js           # 项目 webpack 配置文件入口
```