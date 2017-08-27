# Example Home Module Structure

```
├── actions                             // redux action 目录
│   ├── index.js                        // index page redux action
├── constants                           // redux action type constant 目录
│   ├── index.js                        // index page redux action constant
├── reducers                            // redux reducer 目录
│   ├── index.js                        // index page redux reducer
├── services                            // service 目录
│   ├── index.js                        // index page service
├── stores                              // redux store 目录
│   ├── index.js                        // index page redux store
├── utils                               // 模块工具函数目录
└── views                               // view 目录
    ├── components                      // 公共展示组件目录
    │   └── Header                      // Header 组件目录
    │       ├── images                  // Header 组件图片目录
    │       ├── stylesheets             // Header 组件样式目录
    │       │   └── index.css           // Header 组件样式入口文件
    │       └── index.js                // Header 组件入口文件
    └── index                           // index 页面目录
        ├── components                  // index 页面组件目录
        │   └── Footer                  // Footer 组件目录
        │       ├── images              // Footer 组件图片目录
        │       ├── stylesheets         // Footer 组件样式目录
        │       │   └── index.less      // Footer 组件样式入口文件
        │       └── index.js            // Footer 组件入口文件
        ├── containers                  // index 页面容器组件目录
        │   └── Page                    // index 页面容器组件目录
        │       ├── images              // index 页面容器组件图片目录
        │       ├── stylesheets         // index 页面容器组件样式目录
        │       │   └── index.css       // Page 容器组件样式入口文件
        │       └── index.js            // Page 容器组件入口文件
        └── index.js                    // index 页面入口文件
```

注：
- 该目录下添加文件或文件夹只能水平添加，不能垂直添加（示例目录已经为最深嵌套，不能在嵌套）
- 组件、模型、工具文件命名都为单数
- 样式必须用 css modules 写
- 工具函数请遵守纯函数思想
    - 输入相同，输出相同
    - 过程没有副作用
    - 无额外的状态依赖
