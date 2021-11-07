import React, { useState } from 'react';  
import { useEffect } from 'react/cjs/react.development';
import { deletePost, userData } from '../api';
// ======== takes user to their profile page

const UserProfile = ({token, history}) => {

    // here we use the user posts and render them
    // we are able to delete posts


const [userPosts, setUserPosts] = useState([]);
const [userMessages, setUserMessages] = useState([]); // src index


useEffect( async () =>{
    

    const result = await userData(token);
    
    if (result.data){
    const posts = result.data.posts;    // get the posts
    const messages = result.data.messages;  // get messages
    setUserPosts(posts);
    setUserMessages(messages);}
    else return null;

}, []);

return (

    <div>
        <h1> Your posts and messages</h1>
        
        <br></br>
        {userPosts.map ((posts, index) => {
            
                <div>
                    <h2>Your Posts </h2>
                    <p> {posts.title}</p>
                    <p>{posts.author}</p>
                    <p>{posts.location}</p>
                    <p>{posts.description}</p>
                    <p>{posts.price}</p>
                    <p>{posts.willDeliver}</p>
                    <p></p>
                    
                    <button onClick ={
                        async (event)=>{
                            response= await deletePost(token, posts._id);
                            console.log(response);
                            history.push("/posts");
                        }

                        
                    } type="submit" > Delete</button>


                    <h2>Your Messages</h2>
                    <p></p>
                    {userMessages.map((messages, index) => {
                        return (
                            <div>
                                <h2>Messages</h2>
                                <p>Message: {messages.post.title}</p>
                                <p>From: {messages.fromUser.username}</p>
                                <p>Content: {messages.content}</p>
                            </div>
                        )

                    } )}

                </div>

        




        }) }
    </div>
)

// state for past posts and username
// show username, posts, messages

// useeffect awaits fetch call with token gets user data, pass in token
// pass toekn in second parameter array

// return 

// ternary if token, display header for messages, messages, past posts

// map messages 

// map past posts




}

export default UserProfile;