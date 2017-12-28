<template>
  <section>
 <section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
         my gallery
      </h1>
      <h2 class="subtitle">
        my gallery
      </h2>
    </div>
  </div>
</section>
     <div class="photos-holder">
    
      <div class="card" v-for="story in storyToDisplay" :key="story" >
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="story.imgUrl" alt="Placeholder image">
          </figure>
        </div>

        <div class="content">
          {{storyToDisplay.postText}}
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
      userId:null,
      storyToDisplay:['http://res.cloudinary.com/dxdmd1v1z/image/upload/v1514288566/cut1_rdj7zj.jpg','http://res.cloudinary.com/dxdmd1v1z/image/upload/v1512859058/d_oke6pg.jpg']
    };
  },
  created() {
      
  },
  computed: {
    storyToDisplay() {
        return this.$store.getters.storyToDisplay
        },
  },

};
</script>

<style>
.photos-holder{
  max-width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin:auto;
  border: 1px solid rgb(158, 196, 211);
  border-radius: 5px; 
}
.card {
    max-width: 200px;
    max-height: 100%;
    margin: 5px;
}
</style>


