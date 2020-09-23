
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';

const Picture = () => {
    const {postDetails} = useParams();
    const url = `https://picsum.photos/id/${postDetails}/200/300`
    // const [picture, setPicture] = useState([""])
    // useEffect(() =>{
    //     const url = `https://picsum.photos/id/${postDetails}/200/300`
    //     fetch(url)
    //     .then(response =>response.json())
    //     .then(data =>setPicture(data))
    // },[])
    return (
        <div>
            <h2> picture = </h2>
            <h1>Picture details is here {postDetails}</h1>
            <img src="https://picsum.photos/id/3/200/300" alt="picture"/>

        </div>
    );
};

export default Picture;