//============= importing ===============================
import React, { useState, useEffect } from 'react';    
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';   // for the feature where route /path shows certain components
import { Login, Posts, Editpost, SinglePost, NewPosts, Messages, Search, UserProfile, Title} from './component/';
import { fetchPosts, loggedIn, testToken } from './api';

// ============== MAIN COMPONENT =============================
const App = ( ) => {        

  const [token, setToken] = useState(null);           // token use for registering/ logging in
  const [posts, setPosts] = useState([]);            // posts from API
  const [selectedPost, setSelectedPost] = useState({});  // object of singlePost
  const [storedPosts, setStoredPosts] = useState([]);  // posts displayed during search, copy of posts

// ------------------ variables -----------------
  const isLoggedIn = !!token;   // if theres a token then isLoggedIn true, user is registered/logged in
 
// ----------------- useEffect functions -----------------  
// As soon as page loads it will grab token if its there and set token to storedToken
// render posts in root app
useEffect(
  async ()=> {                  
  const results = await fetchPosts();    
  setPosts( results );                 //  update posts with state
  setStoredPosts(results);       // and copy posts to storedPosts 
}, []);

// it will pass toen to 2 api calls loggenIn and testToken to see if user is logged in and to test token
useEffect(() => {             // run when site loads
    const storedToken = localStorage.getItem('token'); // check if storedtoken/ user logged in
    if (storedToken){         // if theres a token present
      setToken(storedToken);    // update token from api to "save" user info
      // loggedIn(storedToken);
      // testToken(storedToken);
      // makeHeaders(storedToken);  // uses headers to authenticate user and grab user data
    }
  }, []);                     

// ================ RENDER COMPONENTS =====================================


// profile, make new post, and logout links only visible if user has valid token, if not they render null
// a logged out user will only see the links for login, register, and posts
// logged out users cant delete posts or send messages
  return (
    <BrowserRouter>
    <Title />
    <br></br>

    <Router>
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
        {isLoggedIn? <Link to='/newposts'>Make new Post </Link> : null }
        
        
        <h1> Welcome to Stanger's Things </h1>
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
      {/* <Route path="editPost" render={ ( routeProps ) => <Editpost {...routeProps} token={token} posts={posts } setPosts={setPosts} } /> */}
      </Router>
    
    </BrowserRouter>
  )
}

ReactDOM.render( <App />, document.getElementById('app') );
