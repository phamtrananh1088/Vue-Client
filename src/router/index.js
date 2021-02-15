import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: route => ({ path: route.path })
  },
  {
    path: '/xa-hoi',
    name: 'Xahoi',
    component: ()=> import(/* webpackChunkName: "home" */ '../views/Xahoi.vue'),
    props: route => ({ path: route.path })
  },
  {
    path: '/star',
    name: 'Star',
    component: ()=> import(/* webpackChunkName: "home" */ '../views/Star.vue'),
    props: route => ({ path: route.path })
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/xa-hoi/:key',
    name: 'ArticleXahoi',
    meta: {cate:'xa-hoi'},
    component: Article
  },
  {
    path: '/star/:key',
    name: 'ArticleStar',
    meta: {cate:'star'},
    component: Article
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
