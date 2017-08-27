# Usage

```
Description:
    Creates a new view in module

Example:
    yo large-fe:view user profile

    This will create:
        app/client/user/views/profile

    arguments
        first: module name, like home, user ...
        second: view name, like index, profile ...
    options:
        first: Do you use Redux? `--redux` or empty, default without redux for this view

- it can create controllers in batch,  when you use `yo large-fe:view user profile  setting ...`
```

app/client/user/views/profile

```
├── components
│   └── README.md
├── containers
│   └── README.md
├── index.js            # profile 页面打包入口文件
```

注：具体每个目录结构的用途请参见该文件夹下的 README.md
