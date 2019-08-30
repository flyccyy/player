import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import ElementUI from 'element-ui'

import App from './App.vue'
import Results from './components/results.vue'
import Slider from './components/slider.vue'




//样式，不需要像上面引入一样命名，所以不用from
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.css'
import './assets/css/iconfont.css'

//设置axios为全局
Vue.prototype.$axios = axios
//设置基地址
axios.defaults.baseURL = 'https://autumnfish.cn'
//用VueRouter
Vue.use(VueRouter)
Vue.use(ElementUI)





// 设置规则
const routes = [
  {
    //路径自己定义，不是指组件名或者文件名
    path:'/results/:keywords',
    component:Results
  },
  {
    path:'/slider',
    component:Slider
  },
  {
    //重定向到/slider[]
    path:'/',
    redirect:'/slider'
  }
]
//router不用像axios一样自己设置为全局是因为vue-router这个模块已经帮我们设置好
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')