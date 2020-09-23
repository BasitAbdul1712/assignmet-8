import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router';

const useStyles = makeStyles({
  root: {
    maxWidth: 380,
    
  },
  media: {
    height: 140,
    borderRadius: '50%',
  },
});

const CommentDetails = (props) => {
    // console.log(props.cmt);
    const { postDetails } = useParams();
    const pictureUrl = `https://picsum.photos/id/${postDetails}/200/300`;
    
    const classes = useStyles();
    const friendStyle = { 
        
        display: 'flex',
        padding: '5px',
        alignItem: 'center',
        justifyContent: 'center',
    }
   
    const {name, body, id} = props.cmt;
    return (
        <div style= {friendStyle}>
             <Card className={classes.root}>
                <CardActionArea>
                   
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Comment no. {id} <br/>
                          Name:
                          {name}
            
                        </Typography>
                      
                        Profile:
                        <CardMedia
                            className={classes.media}
                            image={pictureUrl}
                        />
                        <br/>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Comment: <br/>
                          <br/>
                          {body}
                         </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default CommentDetails;