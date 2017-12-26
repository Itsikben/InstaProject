
var users =[
    {
        id: 0,
        userName:"ori",
        pass:"1"
        
    },
    {
        id: 1,
        userName:"itsik",
        pass:"12"
        
    },
    {
        id: 2,
        userName:"ido",
        pass:"123"
        
    }
    
]

function validateUser(inputUserName,inputPass){
   return users.filter((user,pass) =>{
        return (user.userName === inputUserName &&
                user.pass === inputPass)
    })
}

export default {
    validateUser
}