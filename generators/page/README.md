# Usage

```
Description:
    Creates a new page in module

Example:
    yo large-fe:page user income

    This will create:
        app/src/modules/user/pages/income

- it can create controllers in batch
```

app/src/modules/user/pages/income

```
├── images              # income　页面图片文件
│   └── README.md
├── javascripts         # income 页面　javascript 文件
│   ├── README.md
│   └── index.js
├── stylesheets         # income 页面　stylesheets 文件
│   ├── index.less
│   └── README.md
├── index.js            # income 页面打包入口文件
└── index.page.js       # income 页面　react 源文件
```

注：具体每个目录结构的用途请参见该文件夹下的 README.md
