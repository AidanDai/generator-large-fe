# Example Chat Module Structure

```
├── actions                             // redux action 目录
│   ├── chat.js 
│   ├── user.js 
│   ├── socket.js 
│   └── message.js                         
├── components                          // 展示组件目录
│   └── chat                            
│       ├── images                      
│       ├── stylesheets                
│       │   └── index.less              
│       └── index.js                    
├── constants                           // redux action type constant 目录
│   ├── chat.js 
│   ├── user.js 
│   ├── socket.js 
│   └── message.js                          
├── reducers                            // redux reducer 目录
│   ├── chat.js 
│   ├── user.js 
│   ├── socket.js 
│   └── message.js                        
├── containers                          // 容器组件目录
│   └── chat                            
│       ├── images                      
│       ├── stylesheets                   
│       │   └── index.less       
│       └── index.js            
├── services                            // service 目录
│   ├── chat.js 
│   ├── user.js 
│   ├── socket.js 
│   ├── client.js 
│   └── message.js                         
├── stores                              // redux store 目录
│   ├── list.js 
│   └── room.js                      
├── utils                               // 工具函数目录
├── create.js                           // 创建快聊页面入口文件
├── list.js                             // 快聊列表页面入口文件
├── detail.js                           // 快聊详情页面入口文件
└── room.js                             // 快聊聊天室页面入口文件
```

注：
- 该目录下添加文件或文件夹只能水平添加，不能垂直添加（示例目录已经为最深嵌套，不能在嵌套）
- 组件、模型、工具文件命名都为单数
- 样式必须用 css modules 写
- 工具函数请遵守纯函数思想
    - 输入相同，输出相同
    - 过程没有副作用
    - 无额外的状态依赖
