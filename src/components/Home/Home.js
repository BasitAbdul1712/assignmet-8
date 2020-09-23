import React, { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap'
import Header from '../Header/Header';
import Post from '../Post/Post';
const Home = () => {

    const [posts, setPosts] = useState([])
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(response =>response.json())
        .then(data => setPosts(data));
    }, [])
    return (
        <div>
            <Header></Header>
            {
                posts.map(pst => <Post post={pst}></Post>)
            }
        </div>
    );
};

export default Home;