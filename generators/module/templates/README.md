# 用途

模块生成器

# 描述

功能模块，例如用户、饭团、话题等

# 结构

## 示例：Chat 模块

```
├── actions                             // 模块 redux action 目录
│   ├── detail.js                       // 示例：detail page redux action
├── constants                           // 模块 redux action type constant 目录
│   ├── detail.js                       // 示例：detail page redux action constant
├── reducers                            // 模块 redux reducer 目录
│   ├── detail.js                       // 示例：detail page redux reducer
├── services                            // 模块 service 目录
│   ├── detail.js                       // 示例：detail page service
├── stores                              // 模块 redux store 目录
│   ├── detail.js                       // 示例：detail page redux store
├── utils                               // 模块工具函数目录
│   ├── dataFormat.js                   // 示例：dataFormat util function
└── views                               // 模块 view 目录
    ├── components                      // 公共组件目录
    │   └── ChatBanner                  // 示例：ChatBanner 组件目录
    │       ├── images                  // ChatBanner 组件图片目录
    │       ├── stylesheets             // ChatBanner 组件样式目录
    │       │   └── index.css           // ChatBanner 组件样式入口文件
    │       └── index.js                // ChatBanner 组件入口文件
    └── detail                          // detail 页面目录
        ├── components                  // detail 页面组件目录
        │   └── Message                 // 示例：Message 组件目录
        │       ├── images              // Message 组件图片目录
        │       ├── stylesheets         // Message 组件样式目录
        │       │   └── index.less      // Message 组件样式入口文件
        │       └── index.js            // Message 组件入口文件
        ├── containers                  // detail 页面容器组件目录
        │   ├── images                  // detail 页面容器组件图片目录
        │   ├── stylesheets             // detail 页面容器组件样式目录
        │   │   └── chat.less           // 示例：Chat 容器组件样式入口文件
        │   └── chat.js                 // 示例：Chat 容器组件入口文件
        └── index.js                    // detail 页面入口文件
```

注：
- 该目录下添加文件或文件夹只能水平添加，不能垂直添加（示例目录已经为最深嵌套，不能在嵌套）
- 组件、模型、工具文件命名都为单数
- 公共组件样式必须用 css modules 写
- 工具函数请遵守纯函数思想
    - 输入相同，输出相同
    - 过程没有副作用
    - 无额外的状态依赖
