
/**
 * 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// import MSite from '../pages/Msite/Msite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'

//路由组件懒加载，当需要该组件时，才请求js
const MSite = () => import('../pages/Msite/Msite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')


import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRating from '../pages/Shop/ShopRatings/ShopRatings.vue'


//声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRating
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '/shop',
          redirect: '/shop/goods'
        }
      ]

    },
    {
      path: '/msite',
      component: MSite, //返回路由组件的函数，只有执行此函数才会加载路由组件， 这个函数在第一次请求对应的路由路径的时候才会执行
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    /*默认路由*/
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
