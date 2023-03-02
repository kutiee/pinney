import Home from '@/views/Home.vue'; //@/可以省略相对位置
import Money from '@/views/Money.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { component } from 'vue/types/umd';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    redirect: "/money"//如果进入直接到money页面
  },
  {
    path: '/money',//路径
    component: Money//money下有啥页面或组件
  },
  {
    path: '/Labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: "*",
    // 全局路径，除了上面四步，如果都不是，进入此路径
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
