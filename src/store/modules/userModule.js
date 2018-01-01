import UserService from "../../services/UserService.js";
import PostService from "../../services/PostService";


export default {
    state: {
        user: '',
        // guestUser: {
        //     "id": 3,
        //     "userName": "guest",
        //     "pass": "123456",
        //     "userDescriptions": "guest speical user",
        //     "profilePic": 3,
        //     "postIds": [0, 1, 2, 3],
        //     "followersIds": [1, 2],
        //     "followingIds": [1, 2],
        //     "fullName":"guest"
        // }
    },
    getters: {
        getUser(state,getters){
            console.log(state)
            // return getters.user
        }

    },
    mutations: {
        setUser(state, {user}) {
            debugger;
            console.log(user)
            state.user = user
        },
        setGuestUser(state, {user}) {
            state.user = user
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



