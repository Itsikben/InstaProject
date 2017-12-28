
var users = [
    {
        "_id": 0,
        "userName": "itsik",
        "pass": "123456",
        "about": "speical user",
        "profilePic": 0,
        "postIds": [0,1,2,3],
        "followersIds": [1,2,3],
        "followingIds": [1,2],
        "fullName": "Itsik Ben Arza", 
    },
    {
        "_id": 1,
        "userName": "ori",
        "pass": "123456",
        "about": "ori user",
        "profilePic":  'http://res.cloudinary.com/dxdmd1v1z/image/upload/v1514288579/cut2_s623c9.jpg',
        "postIds": [0,1,2,3],
        "followersIds": [1,2],
        "followingIds": [0,2],
        "fullName":"Ori Lapushner",
    },
    {
        "_id": 2,
        "userName": "Ido",
        "pass": "123456",
        "about": "sumbat speical user",
        "profilePic": 'http://res.cloudinary.com/dxdmd1v1z/image/upload/v1514288579/cut2_s623c9.jpg',
        "postIds": [0,1,2,3],
        "followersIds": [0,1,3],
        "followingIds": [0,1],
        "fullName":"ido"
    },
    {
        "id": 3,
        "userName": "Sumbat",
        "pass": "123456",
        "about": "sumbat speical user",
        "profilePic":  'http://res.cloudinary.com/dxdmd1v1z/image/upload/v1514288579/cut2_s623c9.jpg',
        "postIds": [0,1,2,3],
        "followersIds": [1,2],
        "followingIds": [1,2],
        "fullName":"sumbat"
    }

]

var emptyObject =
    {
    "id": 3,
    "userName": null,
    "pass": null,
    "about":"",
    "profilePic":  "",
    "postIds":[],
    "followersIds":[],
    "followingIds": [],
    "fullName":null,
       
    };

function randNum() {
    var val = Math.floor(1000 + Math.random() * 9000);
    return val
}

function login(userCreds) {
    return new Promise((resolve,reject) => {
        var u = users.find((u) => {
            return ((u.userName === userCreds.userName) && (u.pass === userCreds.pass));
        });

        if(u) resolve(u)
    });
}

function signup(userDitails) {
    var userToUpdate = emptyObject;
    userToUpdate.id =  randNum();
    userToUpdate.userName = userDitails.userName;
    userToUpdate.pass = userDitails.pass;
    userToUpdate.fullName = userDitails.fullName;

    return new Promise((resolve,reject)=> {
        users.push(userToUpdate)
        resolve(userToUpdate)
        console.log(userToUpdate)
    })
}

function getUsers() {
    return Promise.resolve(users);
}

function getUserById(userId) {
    return getUsers().then(users => {
        var resUser = users.find(u => u.id === userId)
        if (resUser) return resUser
        else return false
    })
}

export default {
    getUserById,
    getUsers,
    login,
    signup
}

