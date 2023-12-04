
// axios is used to make api calls
import axios from 'axios';

// url pointing to our backend route
// const url = 'http://localhost:5000/posts';
const url = 'https://memories-backend-peach.vercel.app/posts';


// axios.get call to url and returns all the posts that we currently have in the database
export const fetchPosts = () => axios.get(url);
// now adding redux capabilities because all actions towards our backend
// are going to be done using redux we need to dispatch those actions

// newPost is entire post
// first we have to specify the url and then we have to specify the data we are sending
// After exporting go back to actions
export const createPost = (newPost) => axios.post(url, newPost); 

// we're receiving two parameters id and updated post data
// In second parameter we are sending the updated post
export const updatePost = (id,updatedPost) => axios.patch(`${url}/${id}`,updatedPost);