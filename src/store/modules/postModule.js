import PostService from "../../services/PostService.js";
export const  LOAD_POSTS = 'loadPosts'

export default {
    state: {
        posts:[],
        currPost: null,
        
    },
    getters: {
        
    },
    mutations: {
        setPosts(state, posts){
            state.posts = posts;
        },
    },
    actions: {
        [LOAD_POSTS]( context , payload){
            console.log({payload, context})
            return PostService.getPosts(payload.postIds)
            .then(posts =>{
                context.commit('setPosts', posts);
                console.log('loadPost goood!');
                
            })
            .catch(err => {
                console.log('loadPost faiillllled!!!!!');
                context.commit('setCars', []);
              })
        }
    }

}