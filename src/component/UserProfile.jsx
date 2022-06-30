import React, { useState } from 'react';  
import { useEffect } from 'react/cjs/react.development';
import { deletePost, userData } from '../api';
import { useHistory } from 'react-router-dom';
// ======== takes user to their profile page


// profile component with grab loggen in users data and map through posts ad messages and display them
// if a user post is active the delete butten will render for the post and will have message POST IS ACTIVE
// if post if not active there will be no delete button and no active message
// if post is active the edit post form will be below the post and user can edit all fields
const UserProfile = ({token, history}) => {

    // here we use the user posts and render them
    // we are able to delete posts
//const token = props.token;   // use this if pass props as parameter


const [userPosts, setUserPosts] = useState([]);
const [userMessages, setUserMessages] = useState([]); // src index
//const history = useHistory();

// <Link to='/editPost'>Edit Post</Link>

console.log(token);

useEffect( async () =>{
    
    try{
    const result = await userData(token);
    
    if (result.data){
    const posts = result.data.posts;    // get the posts
    const messages = result.data.messages;  // get messages
    setUserPosts(posts);
    setUserMessages(messages);}
    else return null;
    }
    catch (err){
        console.error('unable to show posts / messages', err);
    }

}, []);

return (

    <div className='container'>
        <h1> Your posts and messages</h1>
        
        <br></br>
        <div id='posts'></div>
            {userPosts.map ((posts, index) => {
            
                <div key={index} className='container'>
                    <h2>Your Posts </h2>
                        <p>{posts.title}</p>
                    <div className='posts-author'>
                        <p>User Id: {posts.author}</p>
                    </div>
                    <div className='posts-location'>
                        <p>Location: {posts.location}</p>
                    </div>
                    <div className='posts-description'>
                        <p>Description: {posts.description}</p>
                    </div>
                    <div className='posts-price'>
                        <p>Price: {posts.price}</p>
                    </div>
                    <div className='posts-willdeliver'>
                        <p>Will Deliver: {posts.willDeliver}</p>
                    </div>

                    {posts.active ?
                        <div className='posts-active'>
                            <p>Post is currently active {posts.active}</p>
                        </div> : null}
                    
                    {posts.active ?
                    <div className='form-group'>
                    <button onClick ={
                        async (event)=>{

                            try{
                                //call api fxn to delete post and fetches all user posts
                                // when delete button is pressed post should delete from main posts page and push user to posts page
                            response= await deletePost(token, posts._id);
                            console.log(response);

                            fetchAllPosts(userPosts);
                            history.push("/posts");
                            }
                            catch(err){console.error('trouble deleting post', err)
                                }
                        }

                        
                    } type="submit" > Delete POst</button>
                    </div> : null}   

                    


                    <h2>Your Messages</h2>
                    <p></p>
                    {userMessages.map((messages, index) => {
                        return (
                            <div className='message-main'>
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