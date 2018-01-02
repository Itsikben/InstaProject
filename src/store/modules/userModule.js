import UserService from "../../services/UserService.js";
import PostService from "../../services/PostService";


export default {
    state: {
        // user: '',
        isLogged:true,
        isGuest:true,
        user:
        {
            "_id": {
                "$oid": "5a4a8ff26834e30014d1e7f6"
            },
            "pass": "123456",
            "desc": "",
            "profilePic": null,
            "postIds": [],
            "followersIds": [],
            "followingIds": [],
            "username": "guest",
            "fullName": "guest"
        }
    },
           
    getters: {
        getUser(state,getters){
            console.log(state)
            // return getters.user
        }

    },
    mutations: {
        setUser(state, {user}) {
            console.log(user)
            state.user = user
        },
        setLogged(state, {isLogged}) {
            state.isLogged = isLogged
        },
        setGuest(state, {isGuest}) {
            state.isGuest = isGuest
        }

    },
    actions: {
        login({commit},userInfo){
            console.log('commit',commit,'user info:',userInfo)
            UserService.login(userInfo.username,userInfo.pass)
            .then(res => commit({type:'setUser',user:res.data.user}))
            
        },
        signup({commit},userDetails){
            console.log(userDetails)
            UserService.signup(userDetails).then(user => {
                commit({type:'setUser',user})
            })
        },
    }
}



