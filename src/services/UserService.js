const USER_URL = 'http://localhost:3003/data/user'
const LOGIN_URL = 'http://localhost:3003/login'
const SIGNUP_URL = 'http://localhost:3003/signup'
import axios from 'axios'


function login(username,pass){
    // console.log(username,pass)
   return axios({
        method: 'post',
        url: LOGIN_URL,
        data: {
          username,
          pass
        }
      })
      .catch(err => console.log('login failed: ',err))
}
var emptyObject =
    {
    "pass": null,
    "desc": '',
    "profilePic": null,
    "postIds": [],
    "followersIds": [],
    "followingIds": [],
    };

function randNum() {
    var val = Math.floor(1000 + Math.random() * 9000);
    return val
}

// function login(userCreds) {
//     return new Promise((resolve,reject) => {
//         var u = users.find((u) => {
//             return ((u.userName === userCreds.userName) && (u.pass === userCreds.pass));
//         });

//         if(u) resolve(u)
//     });
// }

function signup(userDetails) {
    var userToUpdate = emptyObject;
    userToUpdate.username = userDetails.username;
    userToUpdate.pass = userDetails.pass;
    userToUpdate.fullName = userDetails.fullName;

    return axios({
        method: 'post',
        url: SIGNUP_URL,
        data: userToUpdate
    })
}


function getUsers() {
    return Promise.resolve(users);
}



// function signup(userDetails) {
//     console.log('signin is active');
//     return axios.post(`${URL}/user`, userDetails)
//     .then(_ => {
//         console.log('userDetails', userDetails);
//         return login(userDetails)
//     })
//     .catch(err => err)
// }

// function login(userCreds) {
//     return axios.post(`${URL}/login`, userCreds)
//         .then(({ data }) => {
//             return data
//         })
// }

// function logout() {
//     return axios.get(`${URL}/logout`)
// }

function getUsers(){
   
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


// var users = [
//     {
//         "_id": 0,
//         "userName": "itsik",
//         "pass": "123456",
//         "userDescriptions": "speical user",
//         "profilePic": 0,
//         "postIds": [0,1,2,3],
//         "followersIds": [1,2,3],
//         "followingIds": [1,2],
//         "personalDetails": {
//             "firstName": "Itsik",
//             "lastName": "Ben Arza",
//             "email": "itsik@gmail.com",
//             "address": "bla street 57"
//         }
//     },
//     {
//         "_id": 1,
//         "userName": "ori",
//         "pass": "123456",
//         "userDescriptions": "ori user",
//         "profilePic":  'http://res.cloudinary.com/dxdmd1v1z/image/upload/v1514288579/cut2_s623c9.jpg',
//         "postIds": [0,1,2,3],
//         "followersIds": [1,2],
//         "followingIds": [0,2],
//         "personalDetails": {
//             "firstName": "Ori",
//             "lastName": "Lapushner",
//             "email": "ori@gmail.com",
//             "address": "bla street 57"
//         }
//     },
//     {
//         "_id": 2,
//         "userName": "Ido",
//         "pass": "123456",
//         "userDescriptions": "sumbat speical user",
//         "profilePic": 'http://res.cloudinary.com/dxdmd1v1z/image/upload/v1514288579/cut2_s623c9.jpg',
//         "postIds": [0,1,2,3],
//         "followersIds": [0,1,3],
//         "followingIds": [0,1],
//         "personalDetails": {
//             "firstName": "Ido",
//             "lastName": "Terem",
//             "email": "ido@gmail.com",
//             "address": "bla street 57"
//         }
//     },
//     {
//         "id": 3,
//         "userName": "Sumbat",
//         "pass": "123456",
//         "userDescriptions": "sumbat speical user",
//         "profilePic":  'http://res.cloudinary.com/dxdmd1v1z/image/upload/v1514288579/cut2_s623c9.jpg',
//         "postIds": [0,1,2,3],
//         "followersIds": [1,2],
//         "followingIds": [1,2],
//         "personalDetails": {
//             "firstName": "Sumbat",
//             "lastName": "Ha Gever",
//             "email": "itsik@gmail.com",
//             "address": "bla street 57"
//         }
//     }

// ]
