# 用途

模块生成器

# 描述

功能模块，例如用户、饭团、话题等

# 结构

```
├── components              # 模块内公用组件
│   └── README.md
├── containers              # 模块内公用容器组件
│   └── README.md
├── controllers             # 模块内控制器
│   └── README.md
├── models                  # 模块内模型
│   └── README.md
├── pages                   # 模块内视图
│   └── index               # 模块内首页
│       ├── images          # 模块内首页图片
│       │   └── README.md
│       ├── javascripts     # 模块内首页脚本
│       │   ├── README.md
│       │   └── index.js
│       ├── stylesheets     # 模块内首页样式表
│       │   ├── README.md
│       │   └── index.less
│       ├── index.js        # 模块内首打包入口文件
│       └── index.page.js   # 模块内首页源文件
└── README.md
```

注：每个文件夹的用途及要求请参见该文件夹下 README.md