# vue-demo-tucao

> This is a tucao webpage

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#### 项目结构

src/widget: 存放工具类和自定义组件和控件
src/config: 放置配置信息
src/mock: 放置桩数据
src/css：存放样式文件和样式中需要用到的公共的变量(使用less编写样式)

#### 要点

1.通过全局的mixin向所有的组件中注入debug的标志位，用于标识是否使用打桩数据。

```
Vue.mixin({
	data() {
		return {
			debug: globalConfig.debug
		}
	}
});
```

#### 说明

本项目的起因是XXX人说最近很郁闷，希望有一个可以专门吐槽的网站。正好最近在学习vue，因此萌生了用vue开发一个可以吐槽的微博网站，借此项目巩固vue的知识点。本项目非商用项目，仅供学习使用。

界面的样式设计参考了如下网站：

[www.golaravel.com]()
[https://weibo.com]()
[http://t.qq.com]()