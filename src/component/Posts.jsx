import React, {useState, useEffect} from 'react';   // just need regular react, react dom is for rendering
import { fetchPosts, createPost, createMessage } from '../api';
import {Search, Messages} from "../component";
import { findPostById } from '../api';

// ===================== RENDER POSTS ====================================

const Posts = ( {posts, token, setPosts, history, setSelectedPost, storedPosts}) => {

    // const posts = props.posts;     // array of posts in root app
    // const token = props.token;      // user token
    // const setPosts = props.setPosts;

// ---------------- useEffect api function grabs posts ---------------------------------
    useEffect(         // may not need this bc its in root app
        async ()=> {                  
        const results = await fetchPosts();     
        setPosts( results );                 //  update state with posts
    }, []);    // use default second parameter array

// =================== POSTS ======================================= WORKS
    return (
        <div> 
            <h1>My posts</h1>
            <p> <button onClick={ ()=> {
                    localStorage.removeItem("token");
                    history.push("/login");
                } }
                >Log Out</button>   </p>
                    <Search storedPosts={storedPosts} setPosts={setPosts}/> 
            { posts.map( ( post, index )=>{   // "map" each element and display
                return (

                <div key={post._id}>
                    
                    <h2 >{post.title}</h2>
                    <p >{post.description}</p>
                    <p >{post.price}</p>
                    <p> {post.location}</p>
                    {/* <p> {post.author.username}</p> */}
                    <p> Will Deliver? (Enter true or false) { post.willDeliver} </p>
                    <div>{ token? <Messages token={token} /> : null } {/** finish later????? */} </div>
                   
                   <button type="button" className="btn btn-success"
                        onClick ={ () => { 
                            // const myNewSelectedPost = findPostById(post._id, posts);
                            // setSelectedPost(myNewSelectedPost); // update selected post this is in api
                            history.push(`/posts/${post._id}`
                            
                            );
                        }}> More information about this item</button> {/** bring us to component with only that item */}
                </div>
                )
            }) }
        
        </div>
    )
}


export default Posts;
// import this into App componenet