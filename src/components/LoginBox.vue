<template>
<div class="sec-div">
  <section>
    
    <form v-if="!signUpActive">
<h5 class="title is-5">Log in</h5>
      <div class="field">
        <label class="label">User name</label>
           <div class="control has-icons-left has-icons-right">
              <input class="input is-success" type="text"  placeholder="User name/Email"  v-model="username">
              <span class="icon is-small is-left">
              <i class="fa fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-check"></i>
              </span>
            </div>
      </div>
      <div class="field">
        <label class="label">password</label>
          <div class="control">
            <input class="input" type="password" placeholder="Password"  v-model="pass">
          </div>
      </div>
      <button @click.prevent="login">Log in</button><br>
      <p class="subtitle is-5">not signed up yet?<a @click="toggleSignUp"> Sign up</a></p>
      </form>
    <form v-else>
      <h5 class="subtitle is-5">Sign up</h5>
      <div class="field">
        <label class="label">User name</label>
           <div class="control has-icons-left has-icons-right">
              <input class="input is-success" type="text"  placeholder="User name/Email"  v-model="username">
              <span class="icon is-small is-left">
              <i class="fa fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-check"></i>
              </span>
            </div>
      </div>
      <div class="field">
        <label class="label">Full name</label>
          <div class="control">
            <input class="input" type="text"  placeholder="full name"  v-model="fullName">
          </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="Password"  v-model="pass">
          </div>
      </div>
      <!-- <input type="email" placeholder="Email" v-model="userName"><br> -->
      <button @click.prevent="signup">Sign up</button><br>
      <p class="subtitle is-5">Already have an account?<a @click="toggleSignUp"> Log in</a></p>
      </form>
      <!-- <button>Forgot password?</button> -->
       <button @click.prevent="guestEnters">enter as geust</button><br>

      <!-- <img src="https://media.istockphoto.com/photos/dog-in-the-city-park-picture-id505823546"> -->
  </section>
  </div>
</template>

<script>
import userService from "../services/UserService.js";
export default {
  name: "LoginBox",
  data() {
    return {
      signUpActive: false,
      username: "",
      pass: "",
      fullName: ""
    };
  },
  methods: {
    toggleSignUp() {
      if (this.signUpActive) {
        this.signUpActive = false;
      } else {
        this.signUpActive = true;
      }
    },
    login() {
      this.$store.dispatch('login', {
        username: this.username,
        pass: this.pass
      })
       this.$store.commit("setLogged", { isLogged:true });
        this.$store.commit("setGuest", { isGuest:false });
    },
    signup() {
      this.$store
        .dispatch("signup", {
          username: this.username,
          pass: this.pass,
          fullName: this.fullName
        })
        .then(_ => {
          this.$store.dispatch('login', {
          username: this.username,
          pass: this.pass
      })
      this.$store.commit("setLogged", { isLogged:true });
      this.$store.commit("setGuest", { isGuest:false });
          this.$router.push("/");
          
        })
        .catch(err => console.log(err));
    },
    guestEnters() {
      this.username = 'guest';
      this.pass = '123456';
      this.$store.dispatch("login", {
        username: this.username,
        pass: this.pass
      })
    }
  }
};
</script>

<style scoped>
input {
  margin-top: 7px;
  background-color: whitesmoke !important;
}
.sec-div {
  margin: auto;
  color: #003569;
  padding: 5%;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  max-width: 500px;
  background-color: white;
}
.label{
  font-family: "Indie Flower", cursive;
  font-size: 1.5em;
  color: #003569;
}.title{
  font-family: "Indie Flower", cursive;
  font-size:2em;
  font-weight: 1200;
  color: #003569;
}
.subtitle{
  font-family: "Indie Flower", cursive;
  font-size: 1.8em;
  font-weight: 900;
  color: #003569;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

button {
    box-shadow: rgb(240, 247, 250) 0px 1px 0px 0px;
    background: linear-gradient(rgb(50, 1, 249) 50%, rgb(1, 154, 210) 100%);
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
  button:hover {
     background: linear-gradient( rgb(1, 154, 210) 100%, rgb(51, 1, 239) 50%);
  }
p a:hover {
  cursor: pointer;
}
p {
  margin: 5%;
}
</style>
