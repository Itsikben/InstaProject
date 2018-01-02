import UserService from "../../services/UserService.js";
import PostService from "../../services/PostService";


export default {
    state: {
        user: '',
        isLogged:true,
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



