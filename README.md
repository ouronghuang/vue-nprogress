<h1 align="center">
    Vue nprogress
</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/@orh/vue-nprogress">
        <img alt="npm" src="https://img.shields.io/npm/v/@orh/vue-nprogress?color=ea2039">
    </a>
    <a href="https://www.npmjs.com/package/@orh/vue-nprogress">
        <img alt="npm" src="https://img.shields.io/npm/dt/@orh/vue-nprogress?color=ea2039">
    </a>
    <a href="https://github.com/ouronghuang/vue-nprogress">
        <img alt="GitHub" src="https://img.shields.io/github/license/ouronghuang/vue-nprogress">
    </a>
</p>

进度条

![examples](examples/images/1.png)

## 常规

```html
<link href="<path>/dist/css/vue-nprogress.css" rel="stylesheet">

<script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script>
<script src="<path>/dist/js/vue-nprogress.js"></script>
```

[示例](./examples/index.html)

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
@import "~@orh/vue-nprogress/dist/css/vue-nprogress.css";
```

## 使用

```
// 显示进度
this.$nprogress.start();

// 设置进度
this.$nprogress.set(0.4);

// 增加进度
this.$nprogress.inc();

// 关闭进度
this.$nprogress.done();
```

- [NProgress](https://github.com/rstacruz/nprogress)

## License

MIT
