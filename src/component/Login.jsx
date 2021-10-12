import React, { useState } from 'react';   // just need regular react, react dom is for rendering
import { Link } from 'react-router-dom';
import {registerUser, loginUser } from '../api';
// ==================LOGIN AND REGISTER FORM =====================

const Login = ({ history, match, setToken }) => {       // 
    
    // ======= varbiables =========== 
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

// ======================= USER FORM =========================
    return (
        <div id="login">
            <h1 className="form">Login or Register Here</h1>     {/*renders h1 tag*/}
{/** IF STATEMENT to determine if we are registering, register function, if we are logging in, log in function */}
            
            <form onSubmit={ (event) => { 
                event.preventDefault();

                if (match.url === "/register"){ //registerUser(username, password);
                    const token = registerUser(username,password);
                    setToken(token); 
                    history.push("/login");
                }                
                if (match.url === "/login"){ 
                    const token = loginUser(username, password);
                    setToken(token); 
                    history.push("/posts");
                }

                } } >  

{/** INPUT USERNAME */}
                <div>
                    <label className="form-label">username</label>
                        <input 
                        type="text" 
                        value={username} 
                        placeholder ="username" 
                        required
                        onChange = { (event)=> 
                        { setUsername(event.target.value) } } />
                </div>

{/** INPUT PASSWORD */}
                <div>
                    <label className="form-label">password</label>
                    <input 
                        type="text" 
                        value={password} 
                        placeholder=""
                        required 
                        onChange = { (event)=> 
                        { setPassword(event.target.value) } } />
                </div>

{/** INPUT CONFIRM PASSWORD */}
{/**start with ternary to see if the url is register */}

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
{/**buttons */}                
                
                <button type="submit"
                className="">
                    
                Submit</button>

                <button onClick={ ()=> {
                    localStorage.removeItem("token");
                    setToken(null);
                    history.push("/login");
                } }
                >Log Out</button>
{/**start with ternary to see if we are logged in or out */}
                            
                {match.url === "/register"?
                <Link to="/login">Already have an account?</Link>
                : <Link to="/register">Dont have an account? </Link>
            }
            </form>
        </div>
    )

}

export default Login;

// take set token in as a prop here, when user clicks submit, we call the function api, itll return a token, adn then we will update the token