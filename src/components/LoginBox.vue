<template>
<div class="sec-div">
  <section>
    
    <form v-if="!signUpActive">
<h5 class="subtitle is-5">Log in</h5>
      <div class="field">
        <label class="label">Username</label>
           <div class="control has-icons-left has-icons-right">
              <input class="input is-success" type="text"  placeholder="User name/Email"  v-model="userName">
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
        <label class="label">Username</label>
           <div class="control has-icons-left has-icons-right">
              <input class="input is-success" type="text"  placeholder="User name/Email"  v-model="userName">
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
      userName: "",
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
      this.$store.dispatch("login", {
        userName: this.userName,
        pass: this.pass
      });
    },
    signup() {
      this.$store
        .dispatch("signup", {
          userName: this.userName,
          pass: this.pass,
          fullName: this.fullName
        })
        .then(_ => {
          this.$router.push("/");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
input {
  margin-top: 7px;
}
.sec-div {
  margin: auto;
  padding: 5%;
  border: 1px solid rgb(158, 196, 211);
  border-radius: 5px;
  max-width: 400px;
  background-color: #ffe8ff;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

button {
  margin: 5%;
}
button {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #ffe8ff;
  padding: 8px 20px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#ffffff),
    color-stop(0.5, #2316cc),
    color-stop(0.5, #3541c4),
    color-stop(0.65, #474dc4),
    to(#264ba6)
  );
  border-radius: 10px;
  border: 1px solid #949996;
  box-shadow: 0px 1px 3px rgba(83, 79, 92, 0.5),
    inset 0px 0px 5px rgba(49, 55, 168, 0.6);
  text-shadow: 0px -1px 3px rgba(56, 49, 56, 0.8),
    0px 1px 0px rgba(46, 97, 94, 0.3);
}
p a:hover {
  cursor: pointer;
}
p {
  margin: 5%;
}
</style>
