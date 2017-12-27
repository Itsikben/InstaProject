const URL = 'http://localhost:3003'


var users;

function signup(userDetails) {
    console.log('signin is active');
    return axios.post(`${URL}/user`, userDetails)
    .then(_ => {
        console.log('userDetails', userDetails);
        return login(userDetails)
    })
    .catch(err => err)
}

// function login(userCreds) {
//     return axios.post(`${URL}/login`, userCreds)
//         .then(({ data }) => {
//             return data
//         })
// }

function logout() {
    return axios.get(`${URL}/logout`)
}

function getUsers(){
   
}

function getUserById(userId){
    return getUsers().then(users => {
      var resUser = users.find(u => u.id === userId)
      if(resUser) return resUser
      else return false
    })
}

export default {
    getUserById,
    getUsers
}