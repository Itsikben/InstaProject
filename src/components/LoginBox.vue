<template>
  <section>
    <h1>Instagram</h1>
    <form v-if="!signUpActive">
      <input type="text" placeholder="User name/Email" v-model="userName">
      <input type="password" placeholder="Password" v-model="pass"><br>
      <button @click.prevent="login">Log in</button><br>
      </form>
    <form v-else>
      <input type="text" placeholder="User name" v-model="userName"><br>
      <input type="password" placeholder="Password" v-model="pass"><br>
      <input type="email" placeholder="Email" v-model="userName"><br>
      <input type="text" placeholder="full name" v-model="pass"><br>
      <button @click.prevent="login">Log in</button><br>
      </form>
      <button>Forgot password?</button>
      <p>not signed up yet?<a @click="toggleSignUp"> Sign up</a></p>
      <!-- <img src="https://media.istockphoto.com/photos/dog-in-the-city-park-picture-id505823546"> -->
  </section>
</template>

<script>
import userService from "../services/UserService.js";
export default {
  name: "LoginBox",
  data() {
    return {
      signUpActive: false,
      userName: "",
      pass: ""
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
    }
  }
};
</script>

<style scoped>
input {
  margin-top: 7px;
}
section {
  margin: auto;
  border: 1px solid rgb(115, 142, 153);
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
section {
  max-width: 300px;
}

button {
  margin: 5px;
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
button:hover{
cursor: pointer;

}
</style>
