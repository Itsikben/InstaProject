
<template>
<section>

    <div v-if="isLogged">
      <div class="tabs is-centered">
  <ul>
    <li><a  @click="isMapShow = true" class="is-active" >map</a></li>
    <li><a @click="isMapShow=false" >feed</a></li>
  </ul>
</div>

        <followers-list></followers-list>
        <posts-map  :isMapShow="isMapShow" v-if='isMapShow'></posts-map>
        <posts-list v-else></posts-list>
    </div>
    <!-- <div class="loggin" v-else> -->
      <pre-loggin v-show ="!isLogged"></pre-loggin>
    
    </section>
</template>

<script>
"use strict";
import PreLoggin from "../components/PreLoggin";
import FollowersList from "../components/FollowersList";
import PostService from "../services/PostService.js";
import PostsList from "../components/PostsList";
import PostsMap from "../components/PostsMap";
// import { LOAD_POSTS } from "../store/modules/postModule";


export default {
  name: "HomePage",
  data() {
    return {
        isMapShow: false
    };
  },
  created() {
    this.name = this.$store.getters.imageName;
      
  },
  computed:{
    isLogged(){
      return this.$store.state.user.isLogged
      
    }
  },
  methods: {
    logout(){
      this.$store.commit('setUser',{user: null})
    }
    
  },
  components: {
    PostsList,
    FollowersList,
    PreLoggin,
    PostsMap,
  }
};
</script>



