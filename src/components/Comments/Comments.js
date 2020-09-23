import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import Picture from '../Picture/Picture';

import CommentDetails from '../CommentDetails/CommentDetails';


const Comments = () => {
    

    const { postDetails } = useParams();
    const [comments, setComments] = useState([])
    const pictureUrl = `https://picsum.photos/id/${postDetails}/200/300`
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postDetails}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setComments(data))
    }, [])
  
    return (
        <div >
            {
                comments.map(cmt =><CommentDetails cmt={cmt} key={cmt.id} ></CommentDetails> )
            }
           
        </div>
    );
};

export default Comments;