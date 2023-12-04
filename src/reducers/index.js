import { combineReducers } from "redux";

import posts from './posts'

// combineReducers is a function. put an object inside of it.
// we can use all of the individual reducers that we have
// we only have posts so for that reason we have to import posts

export default combineReducers({
    posts,
});