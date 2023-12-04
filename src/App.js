import React,{useEffect,useState} from "react";
import {Container,AppBar,Typography, Grow, Grid} from '@material-ui/core'
import memories from './images/memories.png'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles'
// import a hook from react redux
// this allows us to dispatch(Send) an action
import { useDispatch } from 'react-redux'
import {getPosts} from './actions/posts';

const App = () => {
    // Initialize
    const classes = useStyles();
    const dispatch = useDispatch();

    const [currentId,setCurrentId] = useState(null)

    useEffect(()=>{
        // dispatching action
        dispatch(getPosts())
        // include the dispatch in the dependency array 
        // when changed, will recall the useEffect function
    },[dispatch])

    return(
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height='60' />
            </AppBar>
            <Grow in>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts  setCurrentId={setCurrentId}/>
                    </Grid>  
                    <Grid item xs={12} sm={4}>
                        <Form  currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>

                </Grid>

            </Grow>

        </Container>
    );
}

export default App;