# Usage

```
Description:
    Creates a new component

Example:
    yo large-fe:component header                                            # 创建全局 component 组件（默认）
    yo large-fe:component user header                                       # 创建 user 模块下的 component 组件
    yo large-fe:component user header --container                     # 创建 user 模块下的 container 组件
    
    This will create:
        app/client/common/components/Header
        app/client/user/components/Header
        app/client/user/containers/Header

    arguments:
        first: module name, like home, user ... it's selectable
        second: component name, like header, menu ...

    options
        first:  is it presentational component or container component ? --component is default 
                --component is presentational component
                --container is container component
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
