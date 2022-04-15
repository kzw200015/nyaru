## 一个因爱而存在的网站(停止更新)
猫雷最强！

本站点通过Github Actions自动编译部署到Github Pages，域名为 <https://nyaru.cc>

## 如何贡献
### 如果您可以贡献代码
本站点使用VuePress构建，您可以Fork后提交PR
### 如果您不能贡献代码，但会使用Markdown和Git
同样Fork后提交PR
### 如果您不满足以上两点
将您想要提交的内容通过issue发出来，我会添加上去
### 开发
首先配置依赖
```
git clone https://github.com/kzw200015/nyaru
cd nyaru && yarn install
```
然后`yarn docs:dev`启动开发服务器，做出你想要的更改，并在浏览器中实时预览
### 构建
执行`yarn docs:build`，编译出的文件位于`docs/.vuepress/dist`