# blog-client

> vue2.x构建的多人共享博客

预览地址：<https://rivoc.github.io/blog-client/dist/index.html>

## 使用项目

```
1.克隆项目：git clone　git@github.com:Rivoc/blog-client.git
2.安装依赖：npm install
3.启动服务：npm run dev
4.在浏览器里打开localhost:8080
5.打包项目：npm run build
```

## 技术栈

- `Vue2.x`：用于构建用户界面
- `Vue-Cli`:脚手架工具
- `vue-router`:页面路由
- `Vuex`:状态管理
- `ES6/7`:使用了箭头函数、promise、async、await
- `Axios`:基于Promise的HTTP库，用于向后台发请求
- `Stylus`:css预编译处理器
- `ElementUI`:使用了该UI框架

## 功能

- [x] 首页主题列表（显示用户发布的设为首页的主题）
- [x] 主题详情
- [x] 用户详情（显示用户所发的所有主题）
- [x] 登录
- [x] 注册
- [x] 注销
- [x] 编辑主题
- [x] 删除主题
- [x] 发布主题（可选择是否展示在首页）

## API介绍
![blog-client API _2_.png](https://i.loli.net/2019/09/23/CdFfNeMQxHWIU1i.png)

## 项目结构

```
.
|-- App.vue					／／页面入口文件
|-- assets					／／图片和样式文件
|   |-- bg.png
|   |-- border.png
|   `-- styles
|       |-- animate.css		／／ａｎｉｍａｔｅ．ｃｓｓ库
|       |-- mixins.styl
|       |-- reset.css
|       `-- variable.styl
|-- components				／／公共组件
|   |-- Footer.vue			／／页脚组件
|   `-- Header.vue			／／头部组件
|-- helper					
|   |-- auth.js				／／接口配置
|   |-- blog.js				／／接口配置
|   `-- request.js			／／对ａｘｉｏｓ的封装
|-- main.js					／／程序入口文件，加载各种公用组件
|-- pages
|   |-- create				
|   |   `-- Create.vue		／／创建博客组件
|   |-- detail
|   |   `-- Detail.vue		／／博客详情组件
|   |-- edit
|   |   `-- Edit.vue		／／编辑博客组件
|   |-- home
|   |   `-- Home.vue		／／首页博客列表
|   |-- login
|   |   `-- Login.vue		／／登录组件
|   |-- my
|   |   `-- My.vue			／／“我的”组件
|   |-- register
|   |   `-- Register.vue	／／注册组件
|   `-- user
|       `-- User.vue		／／用户详情组件
|-- router
|   `-- index.js			／／路由配置
`-- store					／／ｖｕｅｘ状态管理
    |-- index.js			／／加载ｓｔｏｒｅ模块
    `-- modules
        |-- auth.js			认证相关ｓｔｏｒｅ
        `-- blog.js

```

　
