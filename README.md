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

## 通过链接

```html
<link href="<path>/dist/css/vue-nprogress.css" rel="stylesheet">

<script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script>
<script src="<path>/dist/js/vue-nprogress.js"></script>
```

[示例](./examples/index.html)

## NPM

1. 安装

```shell
$ yarn add @orh/vue-nprogress --dev
```

2. 常规

- `main.js`

```javascript
import Vue from 'vue';
import VueNProgress from '@orh/vue-nprogress';
import '@orh/vue-nprogress/dist/css/vue-nprogress.css';
import App from './App.vue';

Vue.use(VueNProgress);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

3. Laravel

- `resources/js/app.js`

```javascript
import VueNProgress from '@orh/vue-nprogress';

Vue.use(VueNProgress);
```

- `resources/sass/app.scss`

```scss
@import "~@orh/vue-nprogress/dist/css/vue-nprogress.css";
```

## 使用

```javascript
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
