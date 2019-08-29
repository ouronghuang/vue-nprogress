## vue-nprogress

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
yarn add vue-nprogress-orh --dev
```

2. 引入 js

```
import vueNProgress from 'vue-nprogress-orh';

Vue.use(vueNProgress);
```

3. 引入样式

```
@import "~vue-nprogress-orh/dist/css/index";
```

## 使用

```
this.$nprogress.start();

this.$nprogress.set(0.4);

this.$nprogress.inc();

this.$nprogress.done();
```

* 使用 [NProgress](https://github.com/rstacruz/nprogress)
