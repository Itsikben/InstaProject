

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
import PostService from "../services/PostService";

export default {
  name: "PostsMap",
  data() {
    return {
      map: null
    };
  },
  props: ["isMapShow"],
  mounted() {
    this.runderMap().then(() => {
      this.renderMarkers();
    });
  },
  methods: {
    runderMap() {
      return new Promise(resolve => {
        var clusterScript = document.createElement("script");
        clusterScript.src =
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js";
        document.head.appendChild(clusterScript);
        var mapScript = document.createElement("script");
        mapScript.setAttribute("defer", "");
        mapScript.setAttribute("async", "");
        mapScript.src =
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyDkx2uX-PC3LrlJNYPBrisOkU_vJqG-9M0";
        document.head.appendChild(mapScript);
        mapScript.onload = () => {
          this.map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 31.7767189, lng: 35.23452 },
            zoom: 7
          });
          resolve();
        };
      });
    },
    renderMarkers() {
      var markers = [];
      // var map = document.getElementById("map");
      console.log("feed in PostsMap > runderMarker", this.feed);
      var self = this;
      console.log({ self });
      // console.log("self.map in rundermap", self.map);
      this.feed.forEach(story => {
        // console.log(story);

        if (story.geolocation.lat && story.geolocation.lng) {
          var contentString = `<div id="content"> 
          <div id="siteNotice"> 
          </div>
          <div id="firstHeading" class="firstHeading">${story.title}</div> 
          <div id="bodyContent">
          <img src="${story.img}">
          <p class="storytext">${story.text}</p>
          </div>
          </div>`;

          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });

          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(
              story.geolocation.lat,
              story.geolocation.lng
            ),
            map: this.map,
            title: story.title,
            icon: {
              url: story.img,
              scaledSize: new google.maps.Size(50, 50)
            }
          });

          marker.addListener("click", function() {
            infowindow.open(map, marker);
          });
          markers.push(marker);
        }
      });
      var markerCluster = new MarkerClusterer(self.map, markers, {
        maxZoom:21,
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
      });
    }
  },
  components: {},
  computed: {
    feed() {
      return this.$store.state.post.feed;
    }
  }
};
</script>
<style>
#map {
  height: 75vh;
}
.main-map-page{
  margin: 3%;
  border: 1px solid gray;
  border-radius: 5px
}
.main-map-page h1 {
    background-color: gray;
    font-size: 25px;
    font-family: 'Franklin Gothic Medium';
}
.firstHeading{
   font-family: "Indie Flower", cursive;
  font-size:2em;
  font-weight: 600;
  color: #003569;
}
.storytext{
font-weight: 600;
}
</style>
