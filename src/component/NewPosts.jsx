import React, {useState} from 'react';   // just need regular react, react dom is for rendering
import { fetchPosts, createPost, createMessage } from '../api';

const NewPosts = ({token, posts, setPosts, history }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [deliver, setDeliver] = useState("");

    return(

        <form onSubmit={ async (event)=> {
            event.preventDefault();    // so it doesnt load new page on submit
            await createPost( token, title, location, description, price, deliver);    // make this async?
        //     console.log(response);
            //setPosts(response);     
        
            const result = await fetchPosts();
            setPosts(result); 
            history.push('/posts');    // send them to all the posts?
        }} >
{/**do these input boxes go IN THE ONSUBMIT? */}
        <p>Create a post</p>
<div>
        <label>Title</label>
        <input onChange={(event)=> setTitle(event.target.value) } value={title} type="text" placeHolder="title" required />
</div>
<div>
        <label>Price</label>
        <input onChange={(event)=> setPrice(event.target.value) } value={price} type="text" placeHolder="price" required />  
</div>
<div>
        <label>Description</label>
        <input onChange={(event)=> setDescription(event.target.value) } value={description} type="text" placeHolder="description" required />
</div>
<div>
        <label>Location</label>
        <input onChange={(event)=> setLocation(event.target.value) } value={location} type="text" placeHolder="location" required />
</div>
<div>
        <label>Deliver?</label>
        <input onChange={(event)=> setDeliver(event.target.value) } value={deliver} type="text" placeHolder="deliver" required />
</div>
<div>
        <button type="submit">Create new post</button>
</div>


        </form>
    )
}

export default NewPosts;