# Common Entry for Webpack

```
├── components              // 全局组件目录
│   └── Menu                // 示例：Menu 组件目录
│       ├── images          // Menu 组件图片目录
│       ├── stylesheets     // Menu 组件样式目录
│       │   └── index.css   // Menu 组件样式入口文件
│       └── index.js        // Menu 组件入口文件
├── models                  // 全局 Model 目录
│   └── user.js             // 示例：user 模型
└── utils                   // 工具函数目录
    └── function.js         // 示例：工具函数文件
```

注：
- 该目录下添加文件或文件夹只能水平添加，不能垂直添加（示例目录已经为最深嵌套，不能在嵌套）
- 组件、模型、工具文件命名都为单数
- 公共组件样式必须用 css modules 写
- 工具函数请遵守纯函数思想
    - 输入相同，输出相同
    - 过程没有副作用
    - 无额外的状态依赖