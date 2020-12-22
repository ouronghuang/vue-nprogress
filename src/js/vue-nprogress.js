import NProgress from 'nprogress';

const install = (Vue, opt = {}) => {
  Vue.prototype.$nprogress = NProgress;
  Vue.prototype.$nprogress.configure(opt);
};

// Auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {install};
