import userModule from './modules/userModule.js'
import postModule from './modules/postModule.js'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
      user : userModule,
      post: postModule
    },
    // strict : !isProduction
    strict : true
  })