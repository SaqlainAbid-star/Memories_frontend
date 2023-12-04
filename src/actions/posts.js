import { FETCH_ALL, CREATE } from '../constants/actionTypes';
// import star as means that we import everything from the api
import * as api from '../api/index.js'

// Action creators are functions that return actions
// we are working with asynchronous data to actually fetch all the posts
// for that we use redux thunk
// an action is just an object that has the type and a payload
// since we'll be dealing with async logic we have to add this async(dispatch) function in front of it
// and then instead of returning the action we have to dispatch it
export const getPosts = () => async (dispatch) => {
    try {
        // try to fetch all the data from the api
        // data represents the posts
        const { data } = await api.fetchPosts();
        console.log(data);
        // payload is usually the data where we store all of our posts 
        // sending that data through the action.payload
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

// create post is an arrow function which then returns another arrow function with a dispatch.
// dispatch comes from redux thunk 
export const createPost = (post) => async (dispatch) => {
    try {
        // getting the data
        // destructure the data from the response
        // this is basically making a post api request to our backend server
        // we are sending a post right there
        const { data } = await api.createPost(post);
        // dispatch an action
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}



export const updatePost = (id, post) => async (dispatch) => {
    try {
        // we're making that api request to update the post 
        // it's returning the updated the post so we can get the response here
        // we can destructure the response and immediately get the data 
        const {data} = await api.updatePost(id, post)

        // once we have the data for the updated post 
        // we can call dispatch, pass in an action of type UPDATE
        // and sending the payload which is data
        dispatch({type: 'UPDATE', payload: data })

    } catch (error) {
        console.log(error.message);
        // Now go to the reducers
    }
}

