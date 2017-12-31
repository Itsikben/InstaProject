const ADD_URL = 'http://localhost:3003/addStory'
const GET_URL = 'http://localhost:3003/getStory'
const GET_STORYS = 'http://localhost:3003/data/story'
import axios from 'axios'

var posts = [
    {
        userId: 1,
        _id: 0,
        imgUrl: "https://s3.amazonaws.com/bk-static-prd-newctn/files/styles/discover_destaque/s3/2016-11/04%20-%20Roma.jpg?itok=sFK02oiy",
        createdAt: 47479987,
        postText: "lorm ipsom",
        geoLocation: {
            lat: 31.7767189,
            long:35.2345200
        },
        likes: [],
        comments: [
            {
                userId: 1,
                text: "string"
            }
        ]
    },
    {
        userId: 2,
        _id: 1,
        imgUrl: "https://s3.amazonaws.com/bk-static-prd-newctn/files/styles/discover_destaque/s3/2016-11/04%20-%20Roma.jpg?itok=sFK02oiy",
        createdAt: 47479987,
        postText: "lorm ipsom lorm ipsom",
        geoLocation: {
            lat: 31.7767215,
            long: 35.2345185
        },
        likes: [1],
        comments: [
            {
                userId: 1,
                text: "string"
            }
        ]
    },
    {
        userId: 3,
        _id: 2,
        imgUrl: "https://s3.amazonaws.com/bk-static-prd-newctn/files/styles/discover_destaque/s3/2016-11/04%20-%20Roma.jpg?itok=sFK02oiy",
        createdAt: 47479987,
        postText: "lorm ipsom lorm ipsom lorm ipsom",
        geoLocation: {
            lat: 31.7767330,
            long: 35.2345270
        },
        likes: [1, 12],
        comments: [
            {
                userId: 1,
                text: "lorm ipsom lorm ipsom lorm ipsom"
            },
            {
                userId: 2,
                text: "lorm ipsom lorm ipsom lorm ipsom"
            },
            {
                userId: 3,
                text: "lorm ipsom lorm ipsom lorm ipsom"
            }
        ]
    },
    {
        userId: 3,
        _id: 3,
        imgUrl: "https://s3.amazonaws.com/bk-static-prd-newctn/files/styles/discover_destaque/s3/2016-11/04%20-%20Roma.jpg?itok=sFK02oiy",
        createdAt: 47479987,
        postText: "lorm ipsom lorm ipsom lorm ipsom",
        geoLocation: {
            lat: 31.7767500,
            long: 35.2345070
        },
        likes: [1, 12],
        comments: [
            {
                userId: 1,
                text: "lorm ipsom lorm ipsom lorm ipsom"
            },
            {
                userId: 2,
                text: "lorm ipsom lorm ipsom lorm ipsom"
            },
            {
                userId: 3,
                text: "lorm ipsom lorm ipsom lorm ipsom"
            }
        ]
    },
    {
        userId: 4,
        _id: 4,
        imgUrl: "https://s3.amazonaws.com/bk-static-prd-newctn/files/styles/discover_destaque/s3/2016-11/04%20-%20Roma.jpg?itok=sFK02oiy",
        createdAt: 47479987,
        postText: "lorm ipsom lorm ipsom lorm ipsom",
        geoLocation: {
            lat: 31.7767200,
            long: 35.2345270
        },
        likes: ['1', '12'],
        comments: [
            {
                userId: 1,
                text: "lorm ipsom lorm ipsom lorm ipsom"
            },
            {
                userId: 2,
                text: "lorm ipsom lorm ipsom lorm ipsom"
            },
            {
                userId: 3,
                text: "lorm ipsom lorm ipsom lorm ipsom"
            }
        ]
    }
];

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
function getPosts(postIds) {
return new Promise ((resolve,reject) =>{
    return posts
})
}

function deletePost(postId) {
    console.log('triying to delete',postId )
    return new Promise((resolve, reject) => {
        var postIdx = posts.findIndex(post => post._id === postId)
        posts.splice(postIdx, 1)
        resolve()
    });
}

function savePost(post,userId ) {
    
    return axios({
        method: 'post',
        url: ADD_URL,
        data: {
          post,
          userId  
        }
      })
}

function getPostById(postId){
    return new Promise((resolve, reject) => {
        var foundPost = posts.find(post => post._id === postId);
        console.log('posts in Post service > getPostById', posts);
        console.log('foundPost in Post service > getPostById', foundPost);
        if (foundPost) resolve(foundPost)
        else reject();
    })
}
 function getPostByUserId(userId){
        return axios
                .get(`${GET_STORYS}/${userId}`)
                .then(res => console.log(res.data))
                .catch(e => {
                    console.log('No posts', e);
                    throw e;
                });
    
 }



export default {
    posts,
    getPosts,
    deletePost,
    savePost,
    getPostById,
    emptyPost,
    getPostByUserId
}