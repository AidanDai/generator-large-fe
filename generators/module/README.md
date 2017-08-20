# Usage

```
Description:
    Creates a new module

Example:
    yo large-fe:module user

    This will create:
        app/client/user

- it can create controllers in batch
```

app/client/user

```
├── actions                             // 模块 redux action 目录
├── constants                           // 模块 redux action type constant 目录
├── reducers                            // 模块 redux reducer 目录
├── services                            // 模块 service 目录
├── stores                              // 模块 redux store 目录
├── utils                               // 模块工具函数目录
└── views                               // 模块 view 目录
    └── components                      // 公共组件目录
```

注：具体每个目录结构的用途请参见该文件夹下的 README.md
