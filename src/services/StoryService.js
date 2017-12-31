var stories = [
    {
        userId: 1,
        _id: 0,
        imgUrl: "https://s3.amazonaws.com/bk-static-prd-newctn/files/styles/discover_destaque/s3/2016-11/04%20-%20Roma.jpg?itok=sFK02oiy",
        createdAt: 47479987,
        storyText: "lorm ipsom",
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
        storyText: "lorm ipsom lorm ipsom",
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
        storyText: "lorm ipsom lorm ipsom lorm ipsom",
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
        storyText: "lorm ipsom lorm ipsom lorm ipsom",
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
        storyText: "lorm ipsom lorm ipsom lorm ipsom",
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

// fn returns an empty story
function emptyStory(params) {
    return {
        userId: " ",
        _id: " ",
        imgUrl: " ",
        createdAt: " ",
        storyText: " ",
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
    var maxId = stories.reduce((acc, story) => {
        return (story._id > acc) ? story._id : acc
    }, 0);
    return maxId + 1;
};

function getStory(storyIds) {
    return new Promise((resolve, reject) => {
        var filterstories = stories.filter(story => {
            return storyIds.includes(story._id)
        })
        console.log('filterstories', filterstories);
        console.log('storyIds', storyIds);
        resolve(filterstories);
    })
};

function deletestory(storyId) {
    console.log('triying to delete',storyId )
    return new Promise((resolve, reject) => {
        var storyIdx = stories.findIndex(story => story._id === storyId)
        stories.splice(storyIdx, 1)
        resolve()
    });
}

function savestory(story) {
    return new Promise((resolve, reject) => {
        if (story.id) {
            var storyToUpdateIdx = story.findIndex(currstory => currstory.id === story.id)
            stories.splice(storyToUpdateIdx, 1, story);
        } else {
            story.id = _getNextId();
            stories.push(story);
        }

        resolve(story);
        //reject();

    });
}

function getstoryById(storyId){
    return new Promise((resolve, reject) => {
        var foundstory = story.find(story => story.id === storyId)
        if (foundstory) resolve(foundstory)
        else reject();
    })
}



export default {
    getstories,
    deletestory,
    savestory,
    getstoryById,
    emptystory
}