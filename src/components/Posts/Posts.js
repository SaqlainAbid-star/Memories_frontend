import React from "react";
import Post from "./Post/Post";
import { Grid,CircularProgress } from "@material-ui/core";
// fetch the data from that global redux store with the help of selectors
import {useSelector} from 'react-redux'

import useStyles from './styles'

const Posts = ({setCurrentId}) =>{
    // initialize it as a hook
    // As a parameter in that callback function we get access to that whole global redux store or state
    // then return state.posts
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();
    console.log(posts.length)
   
    return(
       !posts.length ? <CircularProgress/> : (
           <Grid className={classes.container} container alignItems="stretch" spacing={3} >
               {posts.map((post)=>(
                   <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                   </Grid>
               ))}
           </Grid>
       )
    )
}

export default Posts; 