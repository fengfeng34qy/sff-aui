# sff-build-commponents

> 最简单的组件打包框架

## 步骤

``` bash
# 安装依赖
npm install

# 编译组件
build:packages

# 启动服务 查看效果
npm run dev

# 打包运行
npm run build
```

## 说明
- packages目录是组件源码
- lib目录是存放组件打包后的文件 只有运行npm run build:packages 命令后才会生成


## 组件名称规范
- 姓名首字母 + '-' + 组件名；例如孙锋锋开发的组件，组件名就是: sff-box
