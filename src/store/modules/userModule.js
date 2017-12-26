import UserService from "../../services/UserService.js";

export default {
    state: {
        user: null,

       
    },
    getters: {

    },
    mutations: {
        updateUser(state,user){
            state.user = user
        }

    },
    actions: {
        login(){
            store.commit('updateUser',user)
        
        }
 
    }
}


