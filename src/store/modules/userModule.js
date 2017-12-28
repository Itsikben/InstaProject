import UserService from "../../services/UserService.js";

export default {
    state: {
        user: null,
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
            state.user = user
        },
        setGuestUser(state, {user}) {
            state.user = user
        }

    },
    actions: {
        login({commit},userCreds) {
            UserService.login(userCreds).then(user => {
                commit({type: 'setUser',user});
            })
        },
        signup({commit},userDitails){
            UserService.signup(userDitails).then(user => {
                commit({type:'setUser',user})
            })
        },
    }
}


