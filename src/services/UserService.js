var testUser = JSON.parse(`
{
    "id": 0,
    "userName": "itsik",
    "password": "123456",
    "userDescriptions": "I am always happy about the troubles and forgets asking only questions and I have no problems",
    "profilePic": "http://res.cloudinary.com/dxdmd1v1z/image/upload/v1512669030/hacotel_xzk6hc.jpg",
    "postIds": [],
    "followersIds": [1,2,4,5,6],
    "followingIds": [1,2,3],
    "personalDetails": {
        "firstName": "Itsik",
        "lastName": "Ben Arza",
        "email": "itsik@gmail.com",
        "address": "bla street 57"
    }
}
`)
var users = [testUser];

function getUsers(){
    return Promise.resolve(users);
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