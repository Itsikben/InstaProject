<template>
    <section v-if="user" class="profile-holder">
        <div class="details-place">
          <p class="title is-3"> {{user.userName}}</p>
          <p class="subtitle is-5" v-if="user.userDescriptions">{{user.about}}  {{user.fullName}}</p>
            <div class="details-wind">

               <nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Tweets</p>
      <p class="title">3,456</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Following</p>
      <p class="title">123</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Followers</p>
      <p class="title">456K</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Likes</p>
      <p class="title">789</p>
    </div>
  </div>
</nav>
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
        var userId = this.$route.params.userId
        UserService.getUserById(userId)
         .then(user => this.user = user)
         .catch(err => {
             this.$router.push('/')
         })
    
  },
  // computed: {
  //   user() {
  //     return this.$store.state.user.user;
  //   }
  // }
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


