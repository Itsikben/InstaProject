<template>
  <section>
    <h1>my gallery</h1>
    
     <div class="photos-holder">
    
      <div class="card" v-for="post in postToDisplay" :key="post" >
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="photoToDisplay" alt="Placeholder image">
          </figure>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "UserGallery",
  data() {
    return {
      user:null,
      photoToDisplay:['http://res.cloudinary.com/dxdmd1v1z/image/upload/v1514288566/cut1_rdj7zj.jpg'],
      userId:null,
      postToDisplay:[1,2,3,4,5,6,7,8]
    };
  },
  created() {
      
  },
  // computed: {
  //     photoToDisplay() {
  //         return this.$store.getters.photoToDisplay
  //       },
  //     isUser() {
  //           return this.$store.getters.isUser
  //       },
  //   },

};
</script>

<style>
.photos-holder{
  max-width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin:auto;
}
.card {
    max-width: 200px;
    max-height: 100%;
    margin: 5px;
}
</style>


