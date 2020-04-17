import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '@/views/login/login.vue'
import Admin from '@/views/AdminModules/index.vue'
import Articles from '@/views/AdminModules/child/publishArticles.vue'
import GuestBook from '@/views/AdminModules/child/guestBook.vue'

Vue.use(VueRouter);

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    redirect: '/Admin/Articles',
      children: [
          {
              path: 'Articles',
              name: 'Articles',
              component: Articles
          },
          {
              path: 'GuestBook',
              name: 'GuestBook',
              component: GuestBook
          }
      ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
