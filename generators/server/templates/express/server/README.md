# Project Node.js Arch

```
├── apis                    // swagger apis
├── controllers
│   └── user.js             // 示例：user controoler
├── middlewares
│   └── common.js           // 示例：common middleware
├── models                  // 示例：user model
│   └── user.js
├── public
│   ├── assets              // 与 client/assets 对应
│   └── bundles             // webpack 打包后的文件目录
├── utils
│   └── function.js         // 示例：工具函数文件
└── views
    └── chat
        └── detail.html     // 示例：chat 模块下的 detail 页面
```

注：
- 该目录下添加文件或文件夹只能水平添加，不能垂直添加（示例目录已经为最深嵌套，不能在嵌套）
- 控制器、中间件、模型、工具、视图文件命名都为单数
- 工具函数请遵守纯函数思想
    - 输入相同，输出相同
    - 过程没有副作用
    - 无额外的状态依赖