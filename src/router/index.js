import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/views/User'
import Repos from '@/components/Repos'
import UserHome from '@/components/UserHome'
import Login from '@/views/Login'
import Test from '@/components/Test'
import LanguageChart from '@/components/LanguageChart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: 'login'}
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'user',
    path: '/user',
    component: User,
    children: [
      {
        path: 'home',
        component: UserHome
      },
      {
        path: 'repos',
        component: Repos
      },
      {
        path: 'test',
        component: Test
      }
    ]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
