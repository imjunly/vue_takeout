/**
 * 入口js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Button} from 'mint-ui'

import './mocks/mockServer' //加载mockServer即可
import loading from './common/imgs/loading.gif'
import './filters' //加载过滤器

//注册全局组件标签
Vue.component(Button.name, Button) //<mt-button>

import VueLazyload from 'vue-lazyload'


// or with options
Vue.use(VueLazyload, { //内部自定义了一个指令v-lazy
  // loading: 'dist/loading.gif',
  loading
})


new Vue({
  el: '#app',
  render: h => h(App),
  router, //使用vue-router
  store //使用vuex
})
