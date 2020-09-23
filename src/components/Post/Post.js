import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import PostDetails from '../PostDetails/PostDetails';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    root: {
        maxWidth: 800,
    },
    media: {
        height: 275,
    },
});

const Post = (props) => {
    // console.log(props.post.title);
    const {title, body, id, userId} = props.post;
    const classes = useStyles();

    const details = useHistory()
    const handleClick = (postDetails) => {
        const url = `/posts/${postDetails}`;
        details.push(url)
    }
    const friendStyle = { 
        
        display: 'flex',
        margin: '20px',
        borderRadius: '40px',
        alignItem: 'center',
        justifyContent: 'center',}
    return (
        <div style= {friendStyle}>
            <Card className={classes.root}>
                <CardActionArea>
                    {/* <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Post Title:  {title}
                     </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Post:  <br/>
                          {body}
                     </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button onClick={() =>handleClick (id)} className = "btn" variant="success">Post Details</Button>{' '}
        {/* <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '} */}
                </CardActions>
            </Card>
           {/* <PostDetails></PostDetails> */}
        </div>
    );
};

export default Post;