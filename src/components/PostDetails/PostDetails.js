import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Navbar } from 'react-bootstrap';
import Header from '../Header/Header';

const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
        minWidth: '50%',
        height: 275,
    },
   
    title: {
        fontSize: 35,
    },
    pos: {
        marginBottom: 23,
    },
});


const PostDetails = () => {
    // console.log(props);
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const { postDetails } = useParams();
    const [posts, setPostsDetails] = useState([])
    // console.log(posts);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postDetails}`
        fetch(url)
            .then(response => response.json())
            .then(data => setPostsDetails(data))
    }, [])
    
    const friendStyle = { 
        
        display: 'flex',
        marginLeft: '100px',
        marginRight: '100px',
      
        // alignItem: 'center',
        // justifyContent: 'center',
    }
    return (
        <div >
           {/* <Header></Header> */}
            <Card style= {friendStyle} className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                     Post no: {posts.id}
        </Typography>
                    <Typography variant="h5" component="h2">
                        Post Title: {posts.title} 
        </Typography>
                    <br/>
                    <Typography variant="body2" component="p">
                        Post Details: <br/>
                        <br/> {posts.body}
          <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
            <Comments posts={posts} ></Comments>
        </div>
    );
};

export default PostDetails;