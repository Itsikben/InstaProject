
<template>
<section>

    <div v-if="isLogged">
       <add-photo></add-photo>
        <button @click="isMapShow = !isMapShow">map shoe toggel</button>
        <followers-list></followers-list>
        <posts-map  :isMapShow="isMapShow" v-if='isMapShow'></posts-map>
        <posts-list v-else></posts-list>
    </div>
    <!-- <div class="loggin" v-else> -->
      <pre-loggin v-else></pre-loggin>
    
    </section>
</template>

<script>
"use strict";
import PreLoggin from "../components/PreLoggin";
import FollowersList from "../components/FollowersList";
import PostService from "../services/PostService.js";
import PostsList from "../components/PostsList";
import PostsMap from "../components/PostsMap";
import { LOAD_POSTS } from "../store/modules/postModule";
import AddPhoto from "../components/AddPhoto";

export default {
  name: "HomePage",
  data() {
    return {
        // isLogged: true
        isMapShow: false,
    };
  },
  created() {
    this.name = this.$store.getters.imageName;
      
  },
  computed:{
    isLogged(){
      return !!this.$store.state.user.user
      
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
<<<<<<< HEAD
    AddPhoto
=======
    PostsMap,
>>>>>>> map
  }
};
</script>

