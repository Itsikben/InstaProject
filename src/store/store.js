import userModule from './modules/userModule.js'
import imgModule from './modules/imgModule.js'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
      user : userModule,
      img: imgModule
    },
    // strict : !isProduction
    strict : true
  })