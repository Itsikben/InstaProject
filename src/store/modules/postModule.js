import PostService from "../../services/PostService.js";
export const LOAD_POSTS = 'loadPosts';
export const DELETE_POST = 'deletePost';
export const SAVE_POST = 'savePost';


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
        removePost(state, payload){
            state.posts = state.posts.filter(post => post.id !== payload.id);
        },
        setCurrentPost(state, post){
            state.currPost = post
        }
    },
    actions: {
        loadPost(store, payload){
            return PostService.getPostByUserId(payload.id)
            .then(post => {
                store.commit('setCurrentPost', post)
                console.log('post lodeded',post);
                return post
            })
            .catch(err =>{
                store.commit('setCurrentPost', null);
                console.log('post did not loded');
            })
        },

        [LOAD_POSTS]( context , payload){
            console.log({payload, context})
            return PostService.getPosts(payload.postIds)
            .then(posts =>{
                context.commit('setPosts', posts);
                console.log('loadPost goood!', posts);
                
            })
            .catch(err => {
                console.log('loadPost failed!!!!!');
                context.commit('setPosts', []);
              })
        },
        [DELETE_POST](store, payload) {
            return PostService.deletePost(payload.id)
              .then(_ => {
                store.commit({ type: 'removePost', id: payload.id })
                console.log('post deleted id:', payload.id);
      
              })
              .catch(err => {
                console.log('post ***wasnt*** deleted id:', payload.id);
              })
          },
          [SAVE_POST](store, payload) {
              console.log(payload)
            return PostService.savePost(payload.comment,payload.user)
              .then(savedPost => {
                store.commit({type: 'setCurrentPost', post : savedPost});
              })
              .catch(err => {
                console.log ('cant save currPost!!');
              })
          }
    }
}