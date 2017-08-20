# Usage

```
Description:
    Creates a new component

Example:
    yo large-fe:component header                                            # 创建全局 component 组件（默认）
    yo large-fe:component user header                                       # 创建　user 模块下的 component 组件
    
    yo large-fe:component user index header                                 # 创建 user 模块下 index 页面的 component 组件
    yo large-fe:component user index header --container                     # 创建 user 模块下 index 页面的 container 组件
    
    This will create:
        app/client/common/components/Header
        app/client/user/views/components
        app/client/user/views/index/components/Header
        app/client/user/views/index/containers/Header

    options
        [module name]
        [view name] 
        [component name]
        [component type] [--component|--container], --component is default
```

app/client/common/components/Header

```
.
├── images
│   └── README.md
├── stylesheets
│   ├── README.md
│   └── index.css
└── index.js
```

注：具体每个目录结构的用途请参见该文件夹下的 README.md
