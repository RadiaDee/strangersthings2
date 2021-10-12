import React, {useState, useEffect} from 'react';   // just need regular react, react dom is for rendering
// useEffect called when componenet first populates
// useState to update variable
import { fetchPosts, createPost, createMessage } from '../api';
import {Search } from '../component';

// ===================== RENDER POSTS ====================================
//use the api fetch call here
const Posts = (props) => {

    const posts = props.posts;     // start with array bc api fetch returns array
    const token = props.token;
    const setPosts = props.setPosts;





    useEffect( async ()=> {
        const results = await fetchPosts();     // fetch posts gets posts
        setPosts( results );                 //  update state with posts
    }, [] );    // use default second parameter as array

// =================== POSTS =======================================
    return (
        <div>
            
            
            
            { posts.map( ( post, index )=>{   // go through the "map" grab each element as post and then grab the title which we display
                return (

                <div key={index}>
                    <h2 >{post.title}</h2>
                    <p >{post.description}</p>
                    <p >{post.price}</p>
                    <p> {post.location}</p>
                    <p> {post.author.username}</p>
                    <p> { post.willDeliver} </p>
                    <div>{ token? <Message token={token} /> : null } 
                    
                    </div>
                    <button
                    onClick ={ () => {

                        history.push("post/" + post.index);
                    }
                        // go to postInfo

                    }
                    >More information on this item</button> {/** bring us to component with only that item */}
                </div>
                )
            }) }


            {/* <h1 className="hello">this is an H1 Tag</h1>     renders h1 tag */}
        
        </div>
    )

}

// ================= CREATE A NEW POST =================================================

const NewPosts = ({token, posts, setPosts }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [deliver, setDeliver] = useState("");

    return(

        <form onSubmit={ (event)=> {
            event.preventDefault();
            const response = createPost( token, title, location, description, price, deliver);    // do we need to make this async?
            setPosts([...posts, response]);
            history.push('/posts');
        }} >

        <p>Create your post</p>

        <label>Title</label>
        <input onChange={(event)=> setTitle(event.target.value) } type="text" placeHolder="title" required />

        <label>Price</label>
        <input onChange={(event)=> setPrice(event.target.value) } type="text" placeHolder="price" required />  

        <label>Description</label>
        <input onChange={(event)=> setDescription(event.target.value) } type="text" placeHolder="description" required />

        <label>Location</label>
        <input onChange={(event)=> setLocation(event.target.value) } type="text" placeHolder="location" required />

        <label>Deliver?</label>
        <input onChange={(event)=> setDeliver(event.target.value) } type="text" placeHolder="deliver" required />

        <button type="submit">Create new post</button>

        </form>
    )
}

export { Posts, NewPosts};
// import this into App componenet