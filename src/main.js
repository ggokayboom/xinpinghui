import Vue from 'vue'
import App from './App.vue'
//三级联动组件---全局组件
import TypeNav from "@/components/TypeNav";
//引入路由
import router from "@/router";
//进入仓库
import store from "@/store";

Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
//引入mockServe.js
import '@/mock/mockServe'

import 'swiper/css/swiper.css';

new Vue({
  render: h => h(App),
  //注册路由
  router,
  //注册仓库
  store,
}).$mount('#app')
