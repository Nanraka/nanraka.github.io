import Vue from 'vue'
import Router from 'vue-router'
import Home from './src/components/pages/WebHome.vue'
import About from './src/components/pages/WebAbout.vue'
import Service from './src/components/pages/WebService.vue'
 
// Routerプラグインをvue全体で使用できるようにする
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    }
  ],
  scrollBehavior (to) {
    // ハッシュがある時にはその地点へとスクロールする
    return to.hash ? { selector: to.hash, offset: { x: 0, y: 64 } } : { x: 0, y: 0 }
  }
})