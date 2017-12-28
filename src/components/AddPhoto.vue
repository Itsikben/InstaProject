<template>
  <section>
   <a href="#" id="upload_widget_opener" @click="add">Upload multiple images</a>

  </section>
</template>

<script>

// var cl = new cloudinary.Cloudinary({cloud_name: "demo", secure: true});
export default {
  name: "AddPhoto",
  data() {
    return {
      uploadedPhoto:'',
      
    }
  },
  computed: {
    //  photoUrl() {
    //   // console.log(this.uploadedPhoto)
    //   return this.uploadedPhoto
    //  }
  },
  methods: {
      add(){
      cloudinary.openUploadWidget({ cloud_name: 'dxdmd1v1z', upload_preset: 'xy7rt9uw'}, 
      function(error, result) { return this.uploadedPhoto = result[0].secure_url });
      },   
    }
};
</script>
