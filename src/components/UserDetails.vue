<template>
  <section v-if="user">
    <h1>user details</h1>
    <section class="profile-holder">
        <div class="details-place">
          <p class="title is-3"> {{user.userName}} {{user.personalDetails.lastName}}</p>
          <p class="subtitle is-5">{{user.userDescriptions}}</p>
            <div class="details-wind">
              <p class="subtitle is-5">following {{user.followingIds.length}}</p>
              <p class="subtitle is-5">followers {{user.followersIds.length}}</p>
            </div>
            <a class="button is-primary">edit user</a>
        </div>
      <div class="raund-img"><img :src="user.profilePic"></div>
    </section>
  </section>
</template>

<script>
import UserService from "../services/UserService";
export default {
  name: "UserDetails",

  created() {
    // UserService.getUserById(0).then(u => {
    //   this.user = u;
    //   console.log(this.user, u);
    // });
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    }
  }
};
</script>

<style>
.profile-holder {
  max-width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row-reverse;
}
.raund-img {
  border-radius: 50%;
}
.details-wind {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>


