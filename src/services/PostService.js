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
 console.log('service check',dat)

    return axios({
        method: 'post',
        url: ADD_URL,
        data: dat
    })
}

function getPostById(postId) {
    return new Promise((resolve, reject) => {
        var foundPost = post.find(post => post.id === postId)
        if (foundPost) resolve(foundPost)
        else reject();
    })
}
function getPostsByUserId(userId) {
    console.log('service id', userId)
    return axios
        .get(`${GET_STORYS}/${userId.userId}`)
        .then(res => {
            console.log('servic,',res)
            return res
        })
        .catch(e => {
            console.log('No posts', e);
            throw e;
        });

}



export default {

    deletePost,
    savePost,
    getPostById,
    emptyPost,
    getPostsByUserId
}