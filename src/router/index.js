import Vue from 'vue'
import Router from 'vue-router'
import UserProfile from '../pages/UserProfile'
import DesignImg from '../pages/DesignImg'
import HomePage from '../pages/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/UserProfile',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/DesignImg',
      name: 'DesignImg',
      component: DesignImg
    },
  ]
})
