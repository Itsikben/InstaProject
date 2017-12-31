

// const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json";
const KEY = "AIzaSyDkx2uX-PC3LrlJNYPBrisOkU_vJqG-9M0";
import PostService from "./PostService";


function initMap(map, lat, lng, zoom) {
    console.log('initMap')
    if (!lat) lat = 31.7767189;
    if (!lng) lng = 35.2345085;
    if (!zoom) zoom = 13;

    // var map = new google.maps.Map(
    //     document.getElementById('map'),
    //     {
    //         center: { lat: lat, lng: lng },
    //         zoom: zoom,
    //     }
    // );
    console.log('map:', map, '. lat:', lat, '. lng:', lng, '. zoom:', zoom)
    var contentString = `<div id="content">
    <div id="siteNotice">
    <h1>Post</h1>
    </div> 
   </div>`;


    var infowindow = new google.maps.InfoWindow({
        content: contentString

    });

    var icons = {
        pointer: {
            icon: "https://png.icons8.com/map-pin/color/48/000000"
        }
    };

    // var marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(lat, lng),
    //     icon: icons.pointer.icon,
    //     map: map,
    //     title: 'my post'
    // });
    var posts = [];

    posts.forEach(function (feature) {
        var iconUrl = (icons[feature.tag].icon);
        var infowindow = new google.maps.InfoWindow({
            content: feature.name + '<br>' + '  description: ' + feature.description
        });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(feature.lat, feature.lng),
            icon: iconUrl || icons[0].icon,
            map: map,
            title: feature.name,

        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    });

}

function getMyLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                resolve({
                    lat: coords.latitude,
                    lng: coords.longitude
                })
            })
        }
    })
}


function setPost(post) {  
    var currLat = post.geoLocation.lat;
    var currlong = post.geoLocation.long;
    console.log('currLat in PostMapService > setPost: ', currLat);
    console.log('currlong in PostMapService > setPost: ', currlong);
    console.log('map in PostMapService > setPost: ', map);
    console.log('post.imgUrl in PostMapService > setPost: ', post.imgUrl);

    try {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(currLat, currlong),
            // icon: post.imgUrl,
            map: map,
            title: 'Hello World!'

        });
    } catch (err) {
        console.log(err)
    };
}

function imgRescale(img){
    
} 


export default {
    initMap,
    getMyLocation,
    setPost,
}