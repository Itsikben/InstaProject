const ADD_URL = 'http://localhost:3003/addStory'
const GET_URL = 'http://localhost:3003/getStory'
const GET_STORYS = 'http://localhost:3003/userStories'
import axios from 'axios'

// fn returns an empty post
function emptyPost(params) {
    return {
        userId: " ",
        _id: " ",
        imgUrl: " ",
        createdAt: " ",
        postText: " ",
        geoLocation: {
            lat: " ",
            long: " "
        },
        likes: [],
        comments: [
            {
                userId: " ",
                text: " "
            }
        ]
    }
}

function _getNextId() {
    var maxId = posts.reduce((acc, post) => {
        return (post._id > acc) ? post._id : acc
    }, 0);
    return maxId + 1;
};
// function getPosts(postIds) {
//     return new Promise((resolve, reject) => {
//         return posts
//     })
// }

function deletePost(postId) {
    console.log('triying to delete', postId)
    return new Promise((resolve, reject) => {
        var postIdx = posts.findIndex(post => post._id === postId)
        posts.splice(postIdx, 1)
        resolve()
    });
}

function savePost(dat) {
    console.log('service check', dat)

    return axios({
        method: 'post',
        url: ADD_URL,
        data: dat
    })
}

function getPostById(postId) {
    return new Promise((resolve, reject) => {
        var foundPost = posts.find(post => post._id === postId);
        if (foundPost) resolve(foundPost)
        else reject();
    })
}
function getPostsByUserId(userId) {
    console.log('service id', userId)
    return axios
        .get(`${GET_STORYS}/${userId.userId}`)
        .then(res => {
            return res
        })
        .catch(e => {
            console.log('No posts', e);
            throw e;
        });

}
function uploadImage(file) {
    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dxdmd1v1z/image/upload"
    const CLOUDINARY_PRESET = "xy7rt9uw"
    var formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_PRESET);

    return axios({
        url: CLOUDINARY_URL,
        method: "POST",
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        },
        data: formData
    })
        .then(res => {
            return res.data.url})
        .catch(err => console.log(err));
}

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}


export default {
    // posts,
    // getPosts,
    deletePost,
    savePost,
    getPostById,
    emptyPost,
    getPostsByUserId,
    timeSince,
    uploadImage
}