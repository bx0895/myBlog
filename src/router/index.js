import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'
import Article from '@/views/Article.vue'
import ArticleList from '@/views/ArticleList.vue'
import Column from '@/views/Column.vue'
import Case from '@/views/Case.vue'
import Picture from '@/views/Picture.vue'
import Nprogress from 'nprogress'
import Editor from "@/views/Editor"

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  redirect:'/index',
  children: [
    {
      path: '/index',
      name:'index',
      component: ArticleList
    },
    {
      path: '/column',
      name:'column',
      component: Column,
      meta: {
        requireAuth:true
      }
    },
    {
      path: '/article/:id',
      name:'article',
      component: Article
    },
    {
      path: '/picture',
      name:'picture',
      component: Picture
    },
    {
      path: '/case',
      name:'case',
      component: Case
    },
    {
      path: '/editor',
      name:'editor',
      component: Editor
    },
  ]
    
  },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  Nprogress.start()
  let userAuth = to.meta.requireAuth
  if (userAuth && !store.state.token) {
    Vue.prototype.$notify.warning({
      title: '通知',
      message:'请先登录'
    })
    Nprogress.done()
    next('/index')
  }
  next()
})

router.afterEach(() => {
  Nprogress.done()
})



export default router