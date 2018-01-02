const USER_URL = 'https://geogram-coding.herokuapp.com/data/user'
const LOGIN_URL = 'https://geogram-coding.herokuapp.com/login'
const SIGNUP_URL = 'https://geogram-coding.herokuapp.com/signup'
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



function getUserById(userId) {
   return axios({
       method:'get',
       url:`${USER_URL}/${userId}`,
   })
   .then((res)=> {return res.data})
}

export default {
    getUserById,
    login,
    signup
}



