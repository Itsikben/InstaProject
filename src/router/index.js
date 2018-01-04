import Vue from 'vue'
import Router from 'vue-router'
import UserProfile from '../pages/UserProfile'
import DesignImg from '../pages/DesignImg'
import HomePage from '../pages/HomePage'
import DisplyStory from '../pages/DisplayStory'


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
      path: '/UserProfile/story/:storyId',
      name: 'DisplyStory',
      component: DisplyStory
    },
    {
      path: '/UserProfile/:userId',
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
