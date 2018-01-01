

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
      map: null
    };
  },
  props: ["isMapShow"],
  created() {
    this.runderMap().then(() => {
      this.runderMarkers();
    });
  },
  methods: {
    runderMap() {
      return new Promise(resolve => {
        var script = document.createElement("script");
        script.setAttribute("defer", "");
        script.setAttribute("async", "");
        script.src =
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyDkx2uX-PC3LrlJNYPBrisOkU_vJqG-9M0";
        document.head.appendChild(script);
        script.onload = () => {
          this.map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 31.7767189, lng: 35.23452 },
            zoom: 13
          });
          PostMapService.initMap(this.map);
          console.log("map created");
          resolve();
        };
      });
    },
    runderMarkers() {
      // var map = document.getElementById("map");
      console.log("feed iv PostsMap > runderMarker", this.feed);
      var self = this;
      console.log("self.map in rundermap", self.map);
      this.feed.forEach(story => {
        console.log(story);

        var contentString =
          `<div id="content"> 
          <div id="siteNotice"> 
          </div>
          <router-link to="/" >Instagram</router-link>
          <h1 id="firstHeading" class="firstHeading">${story.title}</h1> 
          <div id="bodyContent">
          <img src="${story.imgUrl}">
          <p>${story.postText}</p>
          <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> 
          https://en.wikipedia.org/w/index.php?title=Uluru</a> 
          (last visited {{story.createdAt}}).</p>
          </div>
          </div>`;

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(
            story.geoLocation.lat,
            story.geoLocation.long
          ),
          map: this.map,
          title: story.postText,
          icon: {
            url: story.imgUrl,
            scaledSize: new google.maps.Size(70, 50)
          }
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

        // marker.setMap(self.map);
        // console.log('slef.map',slef.map)
      });
    }
    // addMarker(post) {
    //   var currLat = post.geoLocation.lat;
    //   var currlong = post.geoLocation.long;
    //   var marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(currLat, currlong),
    //     map: map,
    //     title: "Hello World!"
    //   });
    // }
  },
  components: {},
  computed: {
    feed() {
      return this.$store.state.post.feed;
    }
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
