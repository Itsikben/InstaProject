var testUser = JSON.parse(`
{
    "id": 0,
    "userName": "itsik",
    "password": "123456",
    "userDescriptions": "string",
    "profilePic": "id of a photo",
    "postIds": [],
    "followersIds": [],
    "followingIds": [],
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