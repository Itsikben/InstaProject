import Vue from 'vue'
import Router from 'vue-router'
import UserProfile from '../pages/UserProfile'
import DesignImg from '../pages/DesignImg'
import HomePage from '../pages/HomePage'
import PostDetails from '../pages/PostDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/UserProfile/:userId',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/UserProfile/Post/:postId',
      name: 'PostDetails',
      component: PostDetails
    },
    {
      path: '/DesignImg',
      name: 'DesignImg',
      component: DesignImg
    },
  ]
})
