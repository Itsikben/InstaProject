// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../node_modules/bulma/css/bulma.css'

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router/index.js'
import myStore from './store/store.js'
import cloudinary from 'cloudinary-core'
import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://localhost:3003');

Vue.config.productionTip = false
//Vue.use(Vuex)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store: myStore,
  sockets: {
    connect() {
      console.log('socket connected')
    },
    feedSend(feed) {
      this.$store.commit('setFeed',feed)
    }

  },
})
