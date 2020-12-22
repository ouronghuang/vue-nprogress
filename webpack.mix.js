let mix = require('laravel-mix');

mix.js('src/js/vue-nprogress.js', 'dist/js')
   .sass('src/sass/vue-nprogress.scss', 'dist/css')
   .setPublicPath('dist')
   .webpackConfig({
     output: {
       libraryTarget: 'umd',
       umdNamedDefine: true
     }
   })
   .version()
   .disableNotifications();
