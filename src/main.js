import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css' //该样式文件需要单独引入
import '../src/assets/public.css' //该样式文件需要单独引入
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
// import axios from 'axios'
import store from './store.js' //导入store对象
import VueResource from 'vue-resource'
/*使用VueResource插件*/
Vue.use(VueResource);

// 2. 使用VueRouter
Vue.use(VueRouter);


// Vue.directive('demo', {
//   // 当绑定元素插入到 DOM 中。
//   bind: function (el) {
//     // 聚焦元素
//     console.log(1);
//   }
// })


//创建路由实例
const router = new VueRouter(routerConfig);
Vue.prototype.$notify = ElementUI.Notification;
console.log("Vue.prototype.$notify::",Vue.prototype.$notify);

// Vue.prototype.$http=axios;
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  VueResource,//通过import引入，然后在这里调用
  store,
})
