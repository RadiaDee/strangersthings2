import React from 'react'
import { Link } from 'react-router-dom'

// done but need to add
const Title = ({token}) => {
    return (
        <main className='marginTop homepage-container'>
            <h1>Stranger's Things</h1>
            <h5>Developed by Radia Dee</h5>
            <div className='homepageBtn-container'>
                <button className='homepageBtn'><Link to='/postforum'>Posts</Link></button>
                {token 
                    ? <>
                        <button className='homepageBtn'><Link to='/profile'>User Profile</Link></button>
                        <button className='homepageBtn'><Link to='/newpost'>Create a New Post</Link></button>
                        <button className='homepageBtn'><Link to='/logout'>Logout</Link></button>
                    </>
                    :   <button className='homepageBtn'><Link to='/login'>Login</Link></button>
                }
                
            </div>
        </main>
    )
}

export default Title;