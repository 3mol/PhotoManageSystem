import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css' //该样式文件需要单独引入
import '../src/assets/public.css' //该样式文件需要单独引入
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
// import axios from 'axios'
import store from './store.js' //导入store对象

// 2. 使用VueRouter
Vue.use(VueRouter);


//创建路由实例
const router=new VueRouter(routerConfig);

// Vue.prototype.$http=axios;
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
