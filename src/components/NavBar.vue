<template>
<div class="flexcontainer">
  <nav>
    <router-link to="/" class="nav-txt"> geogram </router-link>
    <router-link to="/DesignImg" class="camera"><i class="fa fa-camera" aria-hidden="true"></i></router-link>
    <router-link v-if="!isGuest"  :to="{path: '/UserProfile/' + user._id}"><img src = "../imgs/profile.png" ></router-link>
    <span class="hellouser" >Hello, {{user.username}}</span>
    <a  v-if="!isGuest" class="log-out" @click="logout">Log out</a>
    <a  v-else class="log-out" @click="logout">Log in</a>
        
  </nav>
  </div>
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
    },
    isGuest() {
      return this.$store.state.user.isGuest;
    }
  },
  methods: {
    logout() {
      if (this.$store.state.user.user & !this.$store.state.user.isGuest) {
        this.$store.commit("clearFeed", []);
        this.$store.commit("setUser", { user: null });
        this.$store.commit("setLogged", { isLogged: false });
        this.$store.commit("setGuest", { isGuest: true });
        this.$router.push("/");
      } else {
        this.$store.commit("setLogged", { isLogged: false });
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped>
.flexcontainer {
  margin-bottom: 80px;
  display: flex;
  justify-content: space-around;
}
.log-out {
  font-family: "Indie Flower", cursive;
  margin-top: 10px;
  font-size: 1.3em;
  color: #003569;
}
.left-container {
  display: flex;
  justify-content: space-around;
}
span {
  font-family: "Indie Flower", cursive;
  right: 8%;
  top: 3px;
}
.hellouser {
  font-size: 1.5em;
  margin: auto 0px;
}
img {
  width: 40px;
  top: -5px;
  right: 15%;
}
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  height: 80px;
  background: white;
  opacity: 0.89;
  border-bottom: 1px solid #e6e6e6;
  position: fixed;
  width: 100%;
  z-index: 3;
}
.nav-txt {
  right: 22%;
  font-family: "Pacifico", cursive;
  font-size: 2.5em;
  color: #003569;
}
.camera {
  right: 22%;
  font-family: "Pacifico", cursive;
  font-size: 1.5em;
  color: #003569;
}

@media (max-width: 550px) {
  .hellouser {
    font-size: 1em;
    /* margin: auto 0px; */
  }

  .nav-txt {
    /* right: 22%; */
    /* font-family: "Pacifico", cursive; */
    font-size: 1.4em;
    /* color: #003569; */
  }

  .camera {
    font-size: 1em;
  }
  
}
</style>




    box-shadow: rgb(240, 247, 250) 0px 1px 0px 0px;
    background: linear-gradient(rgb(51, 189, 239) 5%, rgb(1, 154, 210) 100%) rgb(51, 189, 239);
    border-radius: 5px;
    border: 1px solid rgb(21, 143, 214);
    display: inline-block;
    cursor: pointer;
    color: rgb(255, 255, 255);
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 10px 58px;
    text-decoration: none;
    text-shadow: rgb(91, 97, 120) 0px -1px 0px;
}

