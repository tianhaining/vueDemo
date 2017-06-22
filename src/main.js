import 'es6-promise/auto'
import Vue from 'vue'
import VueRouter from 'vue-router'
/*import VueResource from 'vue-resource'*/
import App from './App'
import routerConfig from './router-config'
import store from 'src/vuex/store'
import vuex from 'vuex'

import VueHighcharts from 'vue-highcharts';
//加载路由中间件
Vue.use(VueRouter);
/*Vue.use(VueResource);*/
Vue.use(vuex);
Vue.use(VueHighcharts);
//定义路由
const router = new VueRouter({
  mode: 'history',
  routes: routerConfig,
  scrollBehavior (to, from, savedPosition) {
    //return 期望滚动到哪个位置
  }
});
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
