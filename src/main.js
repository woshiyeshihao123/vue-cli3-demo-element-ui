import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引用API文件
import api from './api/index.js'

// 将API方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false

// // VUE路由守卫 路由拦截
// router.beforeEach((to, from, next) => {
//   console.log('navigation-guards')
//   // to: Route: 即将要进入的目标 路由对象
//   // from: Route: 当前导航正要离开的路由
//   // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
//   console.log(store.state.loginstate)
//   console.log(to)
//   const nextRoute = ['Membercenter'] // 需要登录才能进入的页面
//   let isLogin = store.state.loginstate// 是否登录
//   // 未登录状态；当路由到nextRoute指定页时，跳转至login
//   if (nextRoute.indexOf(to.name) >= 0) {
//     if (!isLogin) {
//       console.log('未登录')
//       router.push({ name: 'Login' })
//       var flag = false
//     } else {
//       flag = true
//     }
//   } // 已登录状态；当路由到login时，跳转至home

//   if (to.name === 'Login') {
//     if (isLogin) {
//       router.push({ name: 'Xbindex' })
//     }
//   }
//   next(flag)
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
