// import StoryService from "../../services/StoryService.js";
// export const LOAD_STORIES = 'loadStories';
// export const DELETE_STORY = 'deleteStory';
// export const SAVE_STORY = 'saveStory';


// export default {
//     state: {
//         stories:[],
//         currPost: null,
        
//     },
//     getters: {
        
//     },
//     mutations: {
//         setPosts(state, stories){
//             state.stories = stories;
//         },
//         removePost(state, payload){
//             state.stories = state.stories.filter(story => story.id !== payload.id);
//         },
//         setCurrentPost(state, story){
//             state.currPost = story
//         }
//     },
//     actions: {
//         loadPost(store, payload){
//             return PostService.getPostById(payload.id)
//             .then(story => {
//                 store.commit('setCurrentPost', story)
//                 console.log('story lodeded',story);
//                 return story
//             })
//             .catch(err =>{
//                 store.commit('setCurrentPost', null);
//                 console.log('story did not loded');
//             })
//         },

//         [LOAD_STORIES]( context , payload){
//             console.log({payload, context})
//             return PostService.getPosts(payload.storyIds)
//             .then(stories =>{
//                 context.commit('setPosts', stories);
//                 console.log('loadPost goood!', stories);
                
//             })
//             .catch(err => {
//                 console.log('loadPost failed!!!!!');
//                 context.commit('setPosts', []);
//               })
//         },
//         [DELETE_STORY](store, payload) {
//             return PostService.deletePost(payload.id)
//               .then(_ => {
//                 store.commit({ type: 'removePost', id: payload.id })
//                 console.log('story deleted id:', payload.id);
      
//               })
//               .catch(err => {
//                 console.log('story ***wasnt*** deleted id:', payload.id);
//               })
//           },
//           [SAVE_STORY](store, payload) {
//             return StoryService.saveStory(payload.story)
//               .then(savedStory => {
//                 store.commit({type: 'setCurrentStory', story : savedStory});
//               })
//               .catch(err => {
//                 console.log ('cant save currStory!!');
//               })
//           }
//     }
// }