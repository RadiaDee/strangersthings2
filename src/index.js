import React, { useState, useEffect } from 'react';   // usestate here
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';   // for the feature where route /path shows certain components
import {Login, Posts, NewPosts, Messages, Search, UserProfile} from './component/';
import { loggedIn } from './api';


// ============== MAIN COMPONENT =============================
const App = ( ) => {        
  const [token, setToken] = useState(null);           // this is a token with a value
             // When user registers we get the token
             // save token in temporary storage
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    // check if stored token is there, check if user is logged in
    if (storedToken){
      setToken(storedToken);    // when the token is set, we are logged in **** why?
      loggedIn(storedToken);
    }
  }, []);                      // useEffect runs when the dom loads to the screen, use token from local storage to log in




  return (
     
    <BrowserRouter>
      <div id="navBar">
        {token ? <Link to="/profile" >Profile </Link> : <Link to="/login"> Login </Link>}
        {token ? <Link to="/newposts" > Make New Post </Link> : null }
        {token ? <Link to="/logout" > Log Out </Link> : null }
        <Link to="/posts" > Posts </Link>
        <Link to="/login"> Login </Link>
        <Link to="/register" > Register </Link>
        
      </div>
      
      < Route path="/posts" render={ ( routeProps ) => <Posts token={token} {...routeProps} setPosts={setPosts} />} />
      < Route path="/login" render={ ( routeProps ) => <Login setToken={setToken} {...routeProps}/> }/>
      < Route path="/register" render={ ( routeProps ) => <Register setToken={setToken} {...routeProps}/> } />
      < Route path="/newposts" render={ ( routeProps ) => <NewPosts token={token} {...routeProps} posts={posts} setPosts={setPosts}/>} />
      < Route path="/userprofile" render={ ( routeProps ) => <UserProfile token={token} {...routeProps}/>} />
      < Route path="/message" render={ ( routeProps ) => <Message token={token} posts={posts} {...routeProps}/>} />
      < Route path="/search" render={ ( routeProps ) => <Search token={token} posts={posts} {...routeProps}/>} />
    </BrowserRouter>
  )
}

// TODO isLoggedIn function possibly pass into posts
ReactDOM.render( <App />, document.getElementById('app') );
