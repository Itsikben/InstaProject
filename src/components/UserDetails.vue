<template>
    <section v-if="user" class="profile-holder">
        <div class="details-place">
          <p class="title is-3"> {{user.userName}}</p>
          <p class="subtitle is-5" v-if="user.userDescriptions">{{user.about}}  {{user.fullName}}</p>
          <p class="subtitle is-5" v-else>oh !We see that your profile is out of date </p>
            <div class="details-wind">
                            <nav class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">posts</p>
                    <p  class="title">8</p>
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
      <div   class="raund-img animated bounceInUp" v-else><img src="http://res.cloudinary.com/dxdmd1v1z/image/upload/v1514319715/noimg_obp9e7.jpg">you need to add photo</div>
    </section>
</template>

<script>
import UserService from "../services/UserService";

export default {
  name: "UserDetails",
  data() {
    return {
      user: null
    };
  },
  created() {
    var userId = this.$route.params.userId;
    UserService.getUserById(userId)
      .then(user => (this.user = user))
      .catch(err => {
        this.$router.push("/");
      });
  }
  // computed: {
  //   user() {
  //     return this.$store.state.user.user;
  //   }
  // }
};
</script>

<style>
.profile-holder {
  width: 90%;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 5%;
  margin-top: 5%;
  font-family: "Lato", sans-serif;
}
.raund-img {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
}

.raund-img img {
  width: auto;
  height: 100%;
}
.details-wind {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.details-wind nav {
  width: 100%;
  border: solid gray 1px;
  padding: 10px;
}
.details-place {
  width: 300px;
}
</style>


