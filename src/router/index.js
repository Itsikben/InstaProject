import Vue from 'vue'
import Router from 'vue-router'
import UserProfile from '../pages/UserProfile'
import DesignImg from '../pages/DesignImg'
import HomePage from '../pages/HomePage'
<<<<<<< HEAD
import DisplyStory from '../pages/DisplayStory'

=======
import PostDetails from '../pages/PostDetails'
>>>>>>> 34ba8ddb9bd13f6c9df4052d97cc88a6f20f9c5b

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
      path: '/UserProfile/:storyId',
      name: 'DisplyStory',
      component: DisplyStory
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
