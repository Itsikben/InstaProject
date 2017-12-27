<template>
  <section v-if="user">
    <section class="profile-holder">
        <div class="details-place">
          <p class="title is-3"> {{user.userName}}</p>
          <p class="subtitle is-5" v-if="user.userDescriptions">{{user.userDescriptions}}  {{user.personalDetails.lastName}}</p>
            <div class="details-wind">

                            <nav class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">posts uplaud</p>
                    <p class="title">0</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Following</p>
                    <p class="title" v-if="user.followingIds">{{user.followingIds.length}}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Followers</p>
                    <p class="title" v-if="user.followersIds">{{user.followersIds.length}}</p>
                  </div>
                </div>
          
              </nav>
              
            </div>

        </div>
      <div class="raund-img" v-if="user.profilePic"><img :src="user.profilePic"></div>
      <div v-else><img src="http://res.cloudinary.com/dxdmd1v1z/image/upload/v1514319715/noimg_obp9e7.jpg">you need to add photo</div>
    </section>
  </section>
</template>

<script>
import UserService from "../services/UserService";
export default {
  name: "UserDetails",

  created() {
  
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
  justify-content: space-between;
  margin-bottom: 5%;
  margin-top: 5%;

}
.raund-img {
  border-radius: 50%;
  max-width: 50%;
}
.details-wind {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>


