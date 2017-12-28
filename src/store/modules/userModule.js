import UserService from "../../services/UserService.js";


export default {
    state: {
        user: null,
        // user: {
        //     "id": 3,
        //     "userName": "Sumbat",
        //     "pass": "123456",
        //     "userDescriptions": "sumbat speical user",
        //     "profilePic": 3,
        //     "postIds": [0, 1, 2, 3],
        //     "followersIds": [1, 2],
        //     "followingIds": [1, 2],
        //     "personalDetails": {
        //         "firstName": "Sumbat",
        //         "lastName": "Ha Gever",
        //         "email": "sumbat@gmail.com",
        //         "address": "bla street 57"
        //     }
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
        }

    }
}


