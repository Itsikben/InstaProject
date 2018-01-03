<template>
  <section>

    <div class="camera-box">
        <video  id="video"  v-bind:class="{ active: !showVideo }" width="640" height="480" autoplay></video>
        <button id="snap" @click="snap">Snap Photo</button>
        <canvas v-bind:class="{ active: showVideo }" id="canvas" width="640" height="480"></canvas>

            <button @click="filter1">filter1</button>
            <button @click="filter2">filter2</button>
            <button @click="filter3">filter3</button>
            <button @click="takeNewPic">take anther pic</button>
            <button @click="saveImg">save</button>
        <div class="add-img">
            <div class="control">
                <input class="input" type="text" placeholder="Title" v-model="title">
                <input class="input" type="text" placeholder="add text" v-model="text">
                <a class="button is-dark" @click="sendPost">post!</a>
                
            </div>
        </div>
    </div>
  </section>
</template>

<script>
// var cl = new cloudinary.Cloudinary({cloud_name: "demo", secure: true});
import UserService from "../services/UserService";
import PostService from "../services/PostService";
import { SAVE_POST } from "../store/modules/postModule";
export default {
  name: "designImg",
  data() {
    return {
      text: "",
      imgUrl: "",
      title: "",
      canvas: null,
      context: null,
      video: null,
      showVideo: true,
      baseImage: null
    };
  },
  mounted() {
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
    this.video = document.getElementById("video");
  },
  created() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function(stream) {
          video.src = window.URL.createObjectURL(stream);
          video.play();
        });
    }
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
    submitUrl() {
      return "/UserProfile/" + this.user.userId;
    }
  },
  methods: {
    filter1() {
      this.context.filter = "blur(5px) contrast(200)";
      this.context.drawImage(this.baseImage, 0, 0, 640, 480);
    },
    filter2() {
      this.context.filter = "grayscale(90) sepia(50)";
      this.context.drawImage(this.baseImage, 0, 0, 640, 480);
    },
    filter3() {
      this.context.filter = "brightness(2)";
      this.context.drawImage(this.baseImage, 0, 0, 640, 480);
    },
    sendPost() {
      var post = {
        title: this.title,
        userId: this.user._id,
        username: this.user.username,
        img: this.imgUrl,
        createdAt: Date.now(),
        likes: [],
        comments: [],
        text: this.text
      };

      var location = this.getMyLocation().then(loc => {
        post.geolocation = loc;
        this.$store.dispatch(SAVE_POST, { post });
      });
    },
    snap() {
      this.showVideo = false;
      this.context.filter = "none";
      this.context.drawImage(video, 0, 0, 640, 480);
      this.baseImage = new Image();
      this.baseImage.src = this.canvas.toDataURL("image/png");
    },
    takeNewPic() {
      this.showVideo = true;
    },
    saveImg() {
      this.canvas.toBlob(blob => {
        console.log(blob);
        PostService.uploadImage(blob).then(res => {
          this.imgUrl = res;
          console.log(this.imgUrl);
        });
      });
    },
    getMyLocation() {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(({ coords }) => {
            resolve({
              lat: coords.latitude,
              lng: coords.longitude
            });
          });
        }
      });
    }
  }
};
</script>

<style>
.add-img img {
  max-width: 150px;
}
.add-img {
  max-width: 500px;
  max-height: 250pxs;
  border: solid cadetblue;
  margin: auto;
}
.control h1 {
  font-family: "Lucida Sans";
  text-align: center;
  background-color: chocolate;
}
.control a {
  text-align: center;
}
.active {
  display: none;
}
</style>

