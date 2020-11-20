<h1 align="center">
    vue-nprogress
</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/@orh/vue-nprogress">
        <img alt="npm" src="https://img.shields.io/npm/v/@orh/vue-nprogress">
    </a>
    <a href="https://github.com/ouronghuang/vue-nprogress">
        <img alt="GitHub tag (latest SemVer)" src="https://img.shields.io/github/v/tag/ouronghuang/vue-nprogress">
    </a>
</p>

进度条

![examples](examples/images/1.png)

## 常规

```html
<link href="path/vue-nprogress/css/index.css" rel="stylesheet">

<script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script>
<script src="path/vue-nprogress/js/index.js"></script>
```

## NPM

1. 安装

```
yarn add @orh/vue-nprogress --dev
```

2. 引入 js

```
import VueNProgress from '@orh/vue-nprogress';

Vue.use(VueNProgress);
```

3. 引入样式

```
@import "~@orh/vue-nprogress/dist/css/index";
```

## 使用

```
this.$nprogress.start();

this.$nprogress.set(0.4);

this.$nprogress.inc();

this.$nprogress.done();
```

* 使用 [NProgress](https://github.com/rstacruz/nprogress)
