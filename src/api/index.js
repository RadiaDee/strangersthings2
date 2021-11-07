// ALL FETCH CALLS HERE=======================================================================
// ===========================================================================================
// ============================= API KEYS ============================
export const baseURL = 'https://strangers-things.herokuapp.com/api';
export const cohortName = '2107-CSU-RM-WEB-PT';


// ================ GET & RETURN POSTS =================================


export async function fetchPosts(token) {
    try{              

        if(token){      // if token we get more info
                        // if no token then we just get all posts
            const response = await fetch(`${baseURL}/${cohortName}/posts`,
                {   method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    }
                });     // end of fetch call, grab the post info with await

            const result = await response.json();
            return result.data.posts;   // return the posts
            }

        else{
            const response = await fetch(`${baseURL}/${cohortName}/posts`,
                {   method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    }
                });     // grab the info with await
            const result = await response.json();
            return result.data.posts;
            }
        }   
    
    catch (error){      // error handle
    console.error(error); 
    }

} 

// =============== USER END POINTS ==============================================================
//===============================================================================================
// ================== REGSTER USER & RETURN TOKEN =====================

  export async function registerUser(username, password, confirmPassword){
    try{
        
        if (confirmPassword!==password) {      // see if passwords match  
            alert("Your passwords dont match, Please try again");
            return;  // no registration if dont match
            };
            
        const response = await fetch(`${baseURL}/${cohortName}/users/register`,   
            {    // second parameter
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    user: {
                    username: username,
                    password: password
                    }
                })

            })       // end fetch call

        const result = await response.json();
        const token = result.data.token;     // gives us token after user submits info
        return token;
          // localStorage.setItem('token',token);   // maybe remove this? this saves the users token
    }

    catch (error){      // error handle
    console.error(error);    
    }
}

// =========== LOGIN USER & SAVE TOEKN =============================

export async function loginUser(username, password){
    // this gives us toekn
    try{
            
        if (!username || !password) {       // check username passwords match
            alert("Please enter username and password");
            };

        const response = await fetch(`${baseURL}/${cohortName}/users/login`,   // second parameter to fetch next
            {    // second parameter
                method: "POST",
                headers: { 'Content-Type': 'application/json'
                },
                    
                body: JSON.stringify({
                    user: {
                    username: username,
                    password: password
                    }
                })

            })    // end fetch call
            
        const result = await response.json();
        const token = result.data.token;
            
        console.log("this is the token " + token)
        localStorage.setItem("token", token);     // stores it on the personal computer
        return token;
        
    }

    catch (error){      // error handle
    console.error(error);    
    }
}

// ==v======= HEADERS, USED FOR REQUESTS BY REGISTERED USERS ========== DOES THIS WORK???
// gives us more information about that user, so we can display their name, messages ect
// which one should I use and where?
// nevermind I hard coded headers

// export function makeHeaders(token){
//     let headers = {};
//     if(token){
//         headers = {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//             }
//         }
//         else {
//             headers= {
//             'Content-Type': 'application/json'
//             }
//         }
//     }


// pass in method: 'POST'
// header: makeHeaders(token),

// ===v========= GRAB USER DATA ??? AUTHORIZATION =============

// export const makeHeaders = async (token) => {

// //if(token){} .     // ???

// // this obtains the user data  posts and messages
// // when user is logged in we want these headers of the api data
// // if user is not logged in, we dont need them
// // headers with token go to API to determine the user
//     try {
//         const response =await fetch (`${baseURL}/${cohortName}/users/me`, {


//     // the header is a header for the api call, leading information about the data going to the api
//             headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//             }
//         })
//         const result = await response.json();

//         // return result look at api, the users data/ messages
//     }

//     catch (error){      // this takes in the error
//     console.error(error);    // display the error
// }

// //return headers;     // . ????
// }


// ======== USER DATA shows us the users posts and messages ===================

export const userData = async ( token ) => {

    try{

        const response = await fetch(`${baseURL}/${cohortName}/users/me`,
            {
                headers: { 'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }) // end fetch

        const result = await response.json();
        console.log(result);
        return result;       // is this what we return? vs result
    }

    catch (error){
    console.error(error);
    }

}


// ================== POSTS MANIPULATION CREATE, EDIT, DELETE =====================================
//==================================================================================================

// ====================== CREATE POST & RETURN DATA? ===========

export const createPost = async (token, title, location, description, price, deliver) => {

    try{
        const response = await fetch(`${baseURL}/${cohortName}/posts`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                    },
                body: JSON.stringify({
                    post:{
                    title: title,
                    description: description,
                    price: price,
                    location:location,
                    willDeliver: deliver,
                    }
                })
            }) // end of fetch call

        const result = await response.json();
        //return result;
        console.log("my result is", result);
        // return result.data.post;             ?????????????????
    }

    catch (error){      // handles error
    console.error(error);    // display the error

    }

}



// ============== DELETE USERS POST ==============================

export const deletePost = async (token, POST_ID ) => {
    try{
        
        const response = await fetch(`${baseURL}/${cohortName}/posts/` + POST_ID,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })   // end fetch call

        const result =await response.json();
        // no need to return, only deleting the post
               
    }

    catch (error){
    console.error(error);
    }

}


//====extra credit======== EDIT POST THAT MATCHES ID ================= POST_ID or _id================


export const editPost = async (title, description, price, location, deliver, token, POST_ID) => {
    try{

        const response = await fetch(`${baseURL}/${cohortName}/posts/5e8d1bd48829fb0017d2233b`+ POST_ID, 
            {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    post: {
                    title: title,    // change to variable title
                    description: description,
                    price: price,
                    location: location,
                    willDeliver: deliver,
                    }
                })
            })    // end of fetch call

//   .then(response => response.json())
//   .then(result => {
//    console.log(result);

        const result = await response.json();
        return result.data.post;
    }

    catch (error){      // handles error
    console.error(error);
    }
}

// =================== CREATE A NEW MESSAGE AND STORE TO API =============

export const createMessage = async (token, content) => {
    try{

        const response = await fetch(`${baseURL}/${cohortName}/posts/${id}/messages`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer' + token
                },
                body: JSON.stringify({
                    message: {
                    content: content,
                    }
                })
        }) // end fetch call
        const result = await response.json();
        // const id = result.data.message._id;   // maybe not needed?
        console.log(result);
        if (!id){throw new Error("error sending message")};
        return result;      // populate message
    }
    catch (error){
    console.error(error);
    }
}

// ================ helpers function =================================

// ================ find post with Id when clicked on =======================================

export function findPostById(postId, arrayOfPosts) {

    const myPost = arrayOfPosts.find( (postElement) => {
        return postElement._id === postId;
    } );   // return the post element with id that matched the id cliced on

    if (!myPost) return {}
        else return myPost;
    //return myPost || {};   // ?? if the post is undef make an empty object
}

    

