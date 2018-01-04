<template>
  <section>

    <div class="camera-box animated jackInTheBox" v-bind:class="{ close: this.isClose }" leave-active-class="animated jackInTheBox">
        <video  id="video"  v-bind:class="{ active: !showVideo }" width="640" height="480" autoplay></video>
        
        <canvas v-bind:class="{ active: showVideo }" id="canvas" width="640" height="480"></canvas>
        <div v-if="this.snaped" class="filter-console">
            <div class="buttons has-addons is-centered">
                <span   @click="filter1" class="button">blur</span>
                <span @click="filter2" class="button">retro</span>
                <span @click="filter3" class="button">brighting</span>
            </div>
        </div>
        <div class="filter-console">
            <a class="button is-rounded" @click="takeNewPic"><i class="fa fa-undo" aria-hidden="true"></i></a>
            <a class="button is-rounded"  id="snap" @click="snap"><i class="fa fa-camera" aria-hidden="true"></i></a>
            <a class="button is-rounded"  @click="saveImg">save</a>
        </div>
            <div v-if="this.isSaveImg" class="control">
                <div class="field">
                <label class="label">Give a title..</label>
                <input class="input" type="text" placeholder="Title" v-model="title">
                </div>
                 <div class="field">
                    <label class="label">Descriptioמ..</label>
                    <input class="input" type="text" placeholder="add text" v-model="text">
                </div>
               <div class="send-button"> <a @click="sendPost" class="button is-danger is-outlined">Post it baby!</a></div>
                  
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
      baseImage: null,
      snaped:false,
      isSaveImg:false,
      isClose:false
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
        this.$router.push("/");
        this.isClose = true

    },
    snap() {
    this.snaped = true
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
          this.isSaveImg = true;
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

<style scoped>
.active {
    display: none;
}
.camera-box {
    width: 95%;
    max-width: 600px;
    border: 1px solid gray;
    margin: auto;
    background-color: white;
    border-radius: 10px 10px 10px 10px;
    padding: 15px;
    margin-top: 3%;
    margin-bottom: 3%;
}
#canvas {
    width: 100%;
    height: 100%;
    
}
.filter-console {
    padding: 2%;
    
}
#video {
    height: auto;
}
.send-button {
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 2%;
}
.close {
    animated: zoomInDown;
}

body {
    background-color:  whitesmoke;
}
</style>

