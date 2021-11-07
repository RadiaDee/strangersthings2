import React, { useState } from 'react';   // just need regular react, react dom is for rendering
import { Link } from 'react-router-dom';
import {registerUser, loginUser } from '../api';

// ================== LOGIN AND REGISTER =====================

const Login = ({ history, match, setToken }) => {    
    
// ---------------------- varbiables being used ----------------------
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

// ================== LOGIN AND REGISTER FORM ======================
    return (
        <div id="login">
              {/*rendering*/}
            

    {/** start input form */}        
            <form onSubmit={ async (event) => {         
                event.preventDefault();    // onsubmit usually it will go to a new page, this prevents that

                if (match.url === "/register"){ // if we are on register url
                    const token = await registerUser(username,password, confirmPassword);    // register user w api
                    setToken(token);              // update token
                    history.push("/posts");     // send user to posts
                }

                if (match.url === "/login"){    // if we are on login url
                    const token = await loginUser(username, password);    // login user w api
                    setToken(token);               // update token
                    history.push("/posts");      // send user to posts
                }

                } } >       

    {/** INPUT BOX USERNAME */}
                    <div>
                        <label className="form-label">Username</label>
                            <input 
                            type="text" 
                            value={username} 
                            placeholder ="your username" 
                            required
                            onChange = { (event)=> 
                            { setUsername(event.target.value) } } />
                    </div>

    {/** INPUT BOX PASSWORD */}
                    <div>
                        <label className="form-label">Password</label>
                        <input 
                            type="text" 
                            value={password} 
                            placeholder=""
                            required 
                            onChange = { (event)=> 
                            { setPassword(event.target.value) } } />
                    </div>

    {/** INPUT BOX CONFIRM PASSWORD */}
    {/**ternary if the url is register then show confirm password input */}

                    {match.url === "/register" ?
                    (<div>
                        <label className="form-label">Confirm password</label>
                        <input 
                            type="text" 
                            value={confirmPassword} 
                            placeholder="" 
                            required
                            onChange = { (event)=> 
                            { setConfirmPassword(event.target.value) } } />
                    </div>) : null}
    {/**buttons submit / logout */}                
                
                <button type="submit"     // this connects button to onsubmit event handler
                    className="submitButton">
                    Submit</button>

                <button onClick={ ()=> {
                    localStorage.removeItem("token");
                    setToken(null);
                    history.push("/login");
                } }
                >Log Out</button>

    {/**Links for login or register */}
                            
                {match.url === "/register" ?
                    <Link to="/login">Already have an account?</Link>
                    : <Link to="/register">Dont have an account? </Link>
                    }

                {/* {isLoggedIn ?
                <Messages/>             // import message comp and isLoggedIn
                : null
                } */}


    {/**end form */}
            </form>
        </div>
    )

}

export default Login;
