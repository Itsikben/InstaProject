import PostService from "../../services/PostService.js";
export const LOAD_POSTS = 'loadPosts';
export const DELETE_POST = 'deletePost';
export const SAVE_POST = 'savePost';


export default {
    state: {
        posts: [],
        currPost: null,
        feed: [],
        items:[]

    },
    getters: {
            reverseFeed: state => {
                return state.items.slice().reverse();
            }

    },

    mutations: {
        clearFeed(state,feed){
            state.feed = feed;
        },
        updateFeed(state,{updateInfo}) {
             state.feed.splice(updateInfo.idx,1,updateInfo.post)
        },
        setFeed(state, feed) {
            console.log('feed goes into state: ',feed)
            state.feed.push(...feed)
        },
        setPosts(state, posts) {
            state.posts = posts;
        },
        removePost(state, payload) {
            state.posts = state.posts.filter(post => post.id !== payload.id);
        },
        setCurrentPost(state, post) {
            state.currPost = post
        }
    },
    actions: {
        reqFeed(userId) {
            console.log('getPosts activeted')
            socket.emit('req feed')

        },
        // loadPost(store, payload) {
        //     return PostService.getPostById(payload.id)
        //         .then(post => {
        //             store.commit('setCurrentPost', post)
        //             console.log('post lodeded', post);
        //             return post
        //         })
        //         .catch(err => {
        //             store.commit('setCurrentPost', null);
        //             console.log('post did not loded');
        //         })
        [LOAD_POSTS](store, payload){
            return PostService.getPostsByUserId(payload)
            .then(data => {
                store.commit('setPosts', data.data)
                console.log('post lodeded',posts);
                return posts
            })
            .catch(err =>{
                store.commit('setCurrentPost', null);
                console.log('post did not loded');
            })
        },

        // [LOAD_POSTS](context, payload) {
        //     // console.log({ payload, context })
        //     return PostService.getPosts(payload.postIds)
        //         .then(posts => {
        //             context.commit('setPosts', posts);
        //             console.log('loadPost goood!', posts);

        //         })
        //         .catch(err => {
        //             console.log('loadPost failed!!!!!');
        //             context.commit('setPosts', []);
        //         })
        // },
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
            return PostService.savePost(payload.post)
                .then(savedPost => {
                    store.commit({ type: 'setCurrentPost', post: savedPost });
                })
                .catch(err => {
                    console.log('cant save currPost!!');
                })
        }
    }
}


// import io from 'socket.io-client'

// var socket = io('http://localhost:3003')

// socket.on('connect', () => {
//     console.log('connected to socket')
//     socket.on('send feed', feed => {
//         console.log(feed);

//     })
// })