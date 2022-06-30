import React from "react";
import {useState, useEffect} from 'react';
// done but make sure its connected 
// =========== SEARCH COMPONENT =======================================================

const Search = ({storedPosts, setPosts}) => {
    
    // import storedposts so that these posts are stored somewhere else than "posts" as a copy so that posts can still render
    const [searchValue, setSearchValue] = useState("");   // search value is the text the user types in


// ================use Effect when page loads, update list of posts with match search value =========
    useEffect(        // why not use findpostby id?
            ()=>{   const filteredPosts = storedPosts.filter(     // storedPosts is a copy with all the posts
                    ( post )=>{ return post.title.toLowerCase().includes(searchValue.toLowerCase() ) } );   // take post in argument, which is the first element of the array
                    setPosts(filteredPosts);    // shouldnt we setSelectedPosts to set the copy of posts?
                        // set the array of posts with the posts that are filtered and match the input value 
                
                }, [searchValue] // listen for searchValue to update and run useEffect when this updates as well as when page loads
            );



    return (
        <div>
            <label>Search Posts </label>
            <input 
                type='text'
                value={searchValue} 
                placeholder="search" 
                onChange ={(event) => setSearchValue(event.target.value) }
                style={ {maxWidth: 75 + 'vw', height:7 + 'vh' } }
            />

        </div>
    )

}

export default Search;