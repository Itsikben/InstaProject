<template>
  <nav>
      <router-link to="/" class="nav-txt">geogram</router-link>
      <!-- <router-link to="/DesignImg">DesignImg</router-link> -->
      <div class="left-container">
      <router-link v-if="user" :to="{path: '/UserProfile/' + user._id}"><img src = "../imgs/profile.png" ></router-link>
      <span v-if="user">Hello, <br>{{user.username}}</span>
      <a class="log-out" @click="logout">Log out</a>
        </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    username() {
      var user = this.$store.state.user.user;
      if (user === null) return "Guest";
      return user.username;
    },
    userId() {
      return this.$store.state.user.user._id;
    },
    user() {
      return this.$store.state.user.user;
    }
  },
  methods: {
    logout() {
      if (this.$store.state.user.user){
        this.$store.commit("setUser", { user: null });
        this.$router.push("/");
      } else {
         this.$store.commit("setLogged", { isLogged:false });
        this.$router.push("/");
      }
      
    }
  }
};
</script>

<style scoped>
.log-out {
  font-family: "Indie Flower", cursive;
  margin-top: 10px;
  font-size: 1.3em;
}
.left-container {
  width: 40%;
  justify-content: space-between;
  display: flex;
  position: absolute;
  right: 15%;
  top: 3px;
}
span {
  font-family: "Indie Flower", cursive;
  right: 8%;
  top: 3px;
}
img {
  width: 40px;
  top: -5px;
  right: 15%;
}
nav {
  margin: 0;
  height: 50px;
  background: rgb(221, 211, 211);
  border-bottom: 1px solid #e6e6e6;
  position: fixed;
  width: 100%;
  z-index: 3;
}
.nav-txt {
  position: relative;
  right: 22%;
  top: 5px;
  align-self: flex-end;
  font-family: "Pacifico", cursive;
  font-size: 1.6em;
}
</style>
