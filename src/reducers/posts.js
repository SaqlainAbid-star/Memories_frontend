import { FETCH_ALL, CREATE,UPDATE } from '../constants/actionTypes';
// reducer is a function that accepts the state and also it accepts the action
// then based on the action.type 
// we return either action or the state changed by the action
// post is state and initial value our posts is an empty array


// a fetch all action for fetching all the posts
// a create action for creating post

export default (posts = [],action) => {
    switch (action.type) {
        case FETCH_ALL:
            // action.payload are our actual posts
            return action.payload;
        case CREATE:
            // sending an array of posts
            // first spread all the posts and
            // then we have to add a new post 
            // and that new post is stored in the action.payload
            return [...posts,action.payload];
        case UPDATE:
            // map method we'll be mapping over the posts array we'll be changing something in there
            // then we'll be returning the changed array

            // inside of the map we have a single post
            // then we have a ternary expression in there
            // action.payload is the updated post so if the post._id is equal to the 
            // action.payload._id then we want to return the action.payload
            // because that action.payload is the newly updated post
            // otherwise we return just the post as it was without any updates
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post)
            
        default:
            return posts;
    }
}
