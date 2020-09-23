import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 845,
  },
  media: {
    height: 140,
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
        marginLeft: '23%',
        marginRight: '20%',
        padding: '10px',
        borderRadius: '40px',
        alignItem: 'center',
        justifyContent: 'center',
        display: 'flex'
      
    }
    return (
        <div  >
           {/* <Header></Header> */}

    <Card style={friendStyle} className={classes.root}>
      <CardActionArea>
       
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
                     Post no: {posts.id}
        </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          Post Title: {posts.title}
          </Typography>
          
        <Typography variant="body2" component="p">
        Post Details: <br/> 
        <br/>
         {posts.body} <br/>
                    </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {posts.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

            
            <Comments posts={posts} ></Comments>
        </div>
    );
};

export default PostDetails;