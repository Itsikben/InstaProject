
var users = [
    {
        id: 0,
        userName: "ori",
        pass: "1"

    },
    {
        id: 1,
        userName: "itsik",
        pass: "12"

    },
    {
        id: 2,
        userName: "ido",
        pass: "123"

    }

]

function validateUser(inputUserName, inputPass) {
    return users.filter((user, pass) => {
        return (user.userName === inputUserName &&
            user.pass === inputPass)
    })
}

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
    validateUser,
    getUserById,
    getUsers
}