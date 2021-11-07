//============= importing ===============================
import React, { useState, useEffect } from 'react';   // usestate here
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';   // for the feature where route /path shows certain components
import { Login, Posts, SinglePost, NewPosts, Messages, Search, UserProfile} from './component/';
import { fetchPosts } from './api';

// ============== MAIN COMPONENT =============================
const App = ( ) => {        

  const [token, setToken] = useState(null);           // token use for registering/ logging in
  const [posts, setPosts] = useState([]);            // posts from API
  const [selectedPost, setSelectedPost] = useState({});  // object of singlePost
  const [storedPosts, setStoredPosts] = useState([]);  // posts displayed during search, copy of posts

// ------------------ variables -----------------
  const isLoggedIn = !!token;   // if isLoggedIn true, user is registered/logged in
 
// ----------------- useEffect functions -----------------  
  
// render posts in root app
useEffect(
  async ()=> {                  
  const results = await fetchPosts();    
  setPosts( results );                 //  update posts with state
  setStoredPosts(results);       // also copy posts to storedPosts 
}, []);


useEffect(() => {             // run when site loads
    const storedToken = localStorage.getItem('token'); // check if storedtoken/ user logged in
    if (storedToken){
      setToken(storedToken);    // update token from api to "save" user info
      //makeHeaders(storedToken);  // uses headers to authenticate user and grab user data
    }
  }, []);                     

// ================ RENDER COMPONENTS =====================================

  return (
    <BrowserRouter>

    {/* Nav Bar w links */}
      <div id="navBar">
        {isLoggedIn ? <Link to="/userprofile " >Profile </Link> : <Link to="/login"> Login </Link>}
        {isLoggedIn ? <Link to="/newposts" > Make New Post </Link> : null }
        {/* {isLoggedIn ? <Link 
        onClick= {()=>{
        localStorage.removeItem("token");
                    // setToken(null);
                    // history.push("/login");
        } }
        
        > Log Out </Link> : null } */}


        <Link to="/register" > Register </Link>
        <Link to="/posts" > Posts </Link>
        
        
        <h1> Welcome to posts </h1>
      </div>
      
    {/**paths that are executed will render the corresponding component */}
      < Route exact path="/posts" render={ ( routeProps ) => <Posts token={token} {...routeProps} posts={posts} setPosts={setPosts} setSelectedPost={setSelectedPost} storedPosts={storedPosts}/>} />
      < Route exact path="/posts/:id" render={ ( routeProps ) => <SinglePost token={token} {...routeProps} posts={posts} setPosts={setPosts} setSelectedPost={setSelectedPost} selectedPost={selectedPost} />} />

      < Route path="/login" render={ ( routeProps ) => <Login {...routeProps} setToken={setToken} /> }/>
      < Route path="/register" render={ ( routeProps ) => <Login {...routeProps} setToken={setToken} /> } />
      
      < Route path="/newposts" render={ ( routeProps ) => <NewPosts token={token} {...routeProps} posts={posts} setPosts={setPosts}/>} />
      < Route exact path="/userprofile" render={ ( routeProps ) => <UserProfile token={token} {...routeProps}/>} />
      < Route path="/message" render={ ( routeProps ) => <Message token={token} posts={posts} {...routeProps}/>} />
      {/* < Route path="/search" render={ ( routeProps ) => <Search token={token} posts={posts} storedPosts={storedPosts} {...routeProps}/>} /> */}
    </BrowserRouter>
  )
}

ReactDOM.render( <App />, document.getElementById('app') );
