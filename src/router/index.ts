import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'
// 后台
import Login from '@/views/login/login.vue'
import Admin from '@/views/AdminModules/index.vue'
import Articles from '@/views/AdminModules/child/publishArticles.vue'
import GuestBook from '@/views/AdminModules/child/guestBook.vue'
import HomePage from '@/views/webView/Home/home.vue'
// 前台
import Home from  '@/views/webView/index.vue'
import Tag from '@/views/webView/TagPage/tagPage.vue'
import About from '@/views/webView/AboutMe/aboutMe.vue'
import Detail from '@/views/webView/PageDetail/pageDetail.vue'
Vue.use(VueRouter);

  const routes: Array<RouteConfig> = [
      //前台
   {
       path: '/',
       name: 'Home',
       component: Home,
       redirect:'/home',
       children: [
           {
               path: 'home',
               name: 'HomePage',
               component: HomePage
           },
           {
               path: '/Tag',
               name: 'Tag',
               component: Tag,
           },
           {
               path: '/About',
               name: 'About',
               component: About,
           },
           {
               path: '/Detail',
               name: 'Detail',
               component: Detail
           }

       ]
  },

      //后台
  {
    path: '/Login',
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
    ],
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to,from,next) => {
    if(from.name == 'Login') {
        sessionStorage.clear()
    }
    next()
});

export default router
