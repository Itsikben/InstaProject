

<template>
 <section>
     <div v-if="isMapShow">
         
        <div class="mapSection">
            <div class="main-map-page">
                <div id="map" ></div>
                        </div>
        </div>
     </div>
 </section> 
</template>


<script>
import PostMapService from "../services/PostMapService";
import PostService from "../services/PostService";

export default {
  name: "PostsMap",
  data() {
    return {
      posts: [],
      map: null
    };
  },
  props: ["isMapShow"],
  created() {
    var script = document.createElement("script");
    script.setAttribute("defer", "");
    script.setAttribute("async", "");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDkx2uX-PC3LrlJNYPBrisOkU_vJqG-9M0";
    document.head.appendChild(script);
    script.onload = function() {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 31.7767189, lng: 35.2345200 },
        zoom: 13
      });
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(31.7767189, 35.234515),
        // icon: post.imgUrl,
        map: this.map,
        title: "Hello World!",
        icon: {
          url: "https://s3.amazonaws.com/bk-static-prd-newctn/files/styles/discover_destaque/s3/2016-11/04%20-%20Roma.jpg?itok=sFK02oiy",
          scaledSize: new google.maps.Size(70, 50),
          // //This marker is 50 pixels wide by 50 pixels high.
          // size: new google.maps.Size(100, 100),
          // // The origin for this image is (0, 0).
          // origin: new google.maps.Point(0, 0),
          // // The anchor for this image is the base of the flagpole at (0, 32).
          // anchor: new google.maps.Point(0, 32)
        }
      });
      PostMapService.initMap(this.map);
    };
    console.log("script", script);
    console.log("map created");
    PostService.getPosts([0, 1, 2, 3])
      .then(posts => {
        this.posts = posts;
        console.log("posts[0]._id", this.posts[0]._id);
        PostMapService.setPost(posts[0]);
      })
      .catch(err => {
        this.posts = [];
        console.log("posts", this.posts);
      });
  },
  methods: {
    addMarker(post) {
      var currLat = post.geoLocation.lat;
      var currlong = post.geoLocation.long;
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(currLat, currlong),
        map: map,
        title: "Hello World!"
      });
    }
  },
  components: {
    // PostPreview
  }
};
</script>


<style scoped>
#map {
  height: 500px;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
