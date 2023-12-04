import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from './styles'
import FileBase from 'react-file-base64'
// dispatch that action
// fetch the data from that global redux store with the help of selectors
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";



const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
  // find method is returning one singular post
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  // now use that use effect to populate the values of the form 
  // it accepts two parameters first one is a callback function
  // and the second one is called a dependency array
  // callback function should be ran when post value changes from nothing to to the actual post 
  useEffect(()=>{
    if(post) setPostData(post);
  },[post])


  const classes = useStyles();
  const dispatch = useDispatch();



  // on the handle submit once the user submits 
  // we want to send over a post request with all the data that user typed in
  const handleSubmit = (e) => {
    // not to get the refresh in the browser
    e.preventDefault();


    // if the currentId is not null then we're not dispatch a create post 
    // we're dispatch update post
    if (currentId) {
      dispatch(updatePost(currentId, postData))
      // actions use api so  implement the api call for our update post 
    } else {
      // pass all the data from our state
      // once the action is dispatched then we go to the post reducer
      dispatch(createPost(postData))
    }

    // we also call clear function once we edited or created a new form 
    clear();


  }

  const clear = () => {
      setCurrentId(null)
      setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
  }


  return (
    // paper is like a div that has whitish background
    // callback function that has event as a parameter 
    // ... spread the post data
    // multiple is set to false we only need one file
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId? "Editing": "Creating"} a Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );


}

export default Form; 