import React, {useEffect} from 'react';
import { findPostById } from '../api';
import { useParams } from 'react-router-dom';
import {Messages} from './index';

const SinglePost = ({posts, selectedPost, setSelectedPost, match, history}) => {
   // what renders this? 
    const {id}= useParams();  // useParams gets id from posts/:id
    
    
    useEffect( () => {
    //const postId = Number(id);    // no need to coerce into number
    const foundPost = findPostById(id, posts);    // found post is the new array of posts that are matching the id
    console.log(foundPost);
    // update the selectedpost with foundpost
    setSelectedPost(
        foundPost)        // update the post to be seen with array of posts

    }, []);
    


    return (<div>

        <button onClick={ ()=> {
                    localStorage.removeItem("token");
                    
                    history.push("/");
                } }
                >Log Out</button>
                
        <h1>More information on this post</h1>
        <h1>Title: {selectedPost.title}</h1>
                <p>Description: {selectedPost.description}</p>
                <p>Price: {selectedPost.price}</p>
< Messages />
    </div>)
// use match to read url and render that id post
}

export default SinglePost;

