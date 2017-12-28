import imgService from "../../services/ImgService.js";


export default {
    state: {
        img: [{_id: 'xx', name: 'Subary', price: 90}]
    },
    getters: {
        imageName(state){
            return state.img[0].name
        }
    },
    mutations: {
  
    },
    actions: {
        addPost() {
            
        }
    }

}