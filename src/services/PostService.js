var posts = [
    {
        userId: 1,
        _id: 0,
        imgUrl: "https://s3.amazonaws.com/bk-static-prd-newctn/files/styles/discover_destaque/s3/2016-11/04%20-%20Roma.jpg?itok=sFK02oiy",
        createdAt: 47479987,
        postText: "lorm ipsom",
        geoLocation: {
            lat: "x",
            long: "Y"
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
            lat: "x",
            long: "Y"
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
            lat: "x",
            long: "Y"
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
            lat: "x",
            long: "Y"
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
            lat: "x",
            long: "Y"
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
    return new Promise((resolve, reject) => {
        var filterPosts = posts.filter(post => {
            return postIds.includes(post._id)
        })
        console.log('filterPosts', filterPosts);
        console.log('postIds', postIds);
        resolve(filterPosts);
    })
};

function deletePost(postId) {
    console.log('triying to delete',postId )
    return new Promise((resolve, reject) => {
        var postIdx = posts.findIndex(post => post._id === postId)
        posts.splice(postIdx, 1)
        resolve()
    });
}

function savePost(post) {
    return new Promise((resolve, reject) => {
        if (post.id) {
            var postToUpdateIdx = post.findIndex(currPost => currPost.id === post.id)
            posts.splice(postToUpdateIdx, 1, post);
        } else {
            post.id = _getNextId();
            posts.push(post);
        }

        resolve(post);
        //reject();

    });
}

function getPostById(postId){
    return new Promise((resolve, reject) => {
        var foundPost = post.find(post => post.id === postId)
        if (foundPost) resolve(foundPost)
        else reject();
    })
}



export default {
    getPosts,
    deletePost,
    savePost,
    getPostById,
    emptyPost
}