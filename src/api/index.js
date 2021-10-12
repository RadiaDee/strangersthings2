// ALL FETCH CALLS HERE
// ================ API KEYS ========================
export const baseURL = 'https://strangers-things.herokuapp.com/api';
export const cohortName = '2107-CSU-RM-WEB-PT';


// ============= GET POSTS AND UPDATE THE STATE WITH THOSE POSTS IN POSTS COMPONENT =====

export async function fetchPosts() {
    try{              // what the function "does"
        const response = await fetch(`${baseURL}/${cohortName}/posts`);     // grab the info and wait
        const result = await response.json();
        // return result;       // an object that has information about the request we made which includes the posts
        return result.data.posts;   // these are the posts
    
    }   catch (error){      // this just takes in the error
        console.error(error);    // display the error
    }
} 


// =========== REGSTER USER SEND PASSWORD AND USERNAME TO API =====================

  export async function registerUser(username, password){

    try{
        if (confirmPassword!==password) {
            alert("Alert your passwords dont match, Please try again!");
            return;
        };
        const response = await fetch(`${baseURL}/${cohortName}/users/register`,   // second parameter to fetch next
            {    // second parameter
                method: "POST",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                user: {
                username: username,
                password: password
                }
            })
          })
          const result = await response.json();
          
          const token = result.data.token;     // gives us token after user submits info
          return token;
          // localStorage.setItem('token',token);   // maybe remove this? this saves the users token
    }
        catch (error){      // thistakes in the error
        console.error(error);    // display the error
    }
  }

// ======== LOGIN A USER =================================

export async function loginUser(username, password){
    

        try{

            if (!username || !password) {
                alert("Please enter username and password");
            };

            const response = await fetch(`${baseURL}/${cohortName}/users/login`,   // second parameter to fetch next
                {    // second parameter
                    method: "POST",
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({
                    user: {
                    username: username,
                    password: password
                    }
                })
              })
              const result = await response.json();
              const token = result.data.token;     // gives us token after user submits info
              localStorage.setItem("token", token);     // stores it on the personal computer
              return token;
        }
            catch (error){      // thistakes in the error
            console.error(error);    // display the error
    }
}

// ========= api to check if logged in ============

export const loggedIn = async (token) => {
    try {
        const response =await fetch (`${baseURL}/${cohortName}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        })
        const result = await response.json();
        if (!result){
        alert("user is not logged in");
        }
    }

    catch (error){      // thistakes in the error
    console.error(error);    // display the error
}
}




// ====================== CREATE A NEW POST (send to api) ===========

export const createPost = async (token, title, location, description, price, deliver) => {
    try{
        const response = await fetch(`${baseURL}/${cohortName}/posts`,
        {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer' + token 
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
        })
        const result = await response.json();
        return result.data.post;
    }
    catch (error){      // thistakes in the error
    console.error(error);    // display the error
}
}

// =================== USER DATA FROM THE API ====================

export const userData = async ( token ) => {
    try{
        const response = await fetch(`${baseURL}/${cohortName}/users/me`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token
            },
        })
        const result = await response.json();
        return result.data;      // is this what we return?
    }
    catch (error){
    console.error(error);
    }


}


// ============== DELETE A USERS POST FROM THE API ========================

export const deletePost = async (token, POST_ID ) => {
    try{
        const response = await fetch(`${baseURL}/${cohortName}/posts/` + POST_ID,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token,

            },
        })
        const result =await response.json();
        // dont need to return because we are deleting?
        
        
    }
    catch (error){
    console.error(error);
    }

}

// =================== CREATE A NEW MESSAGE AND STORE TO API =====================

export const createMessage = async (token, content, id) => {
    try{
        const response = await fetch(`${baseURL}/${cohortName}/posts/` + id + '/messages',
        {
            method: "POSTS",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token
            },
            body: JSON.stringify({
                message: {
                    content: content,
                }
            })
        })
        const result = await response.json();
        const id = result.data.message.id;
        // do we return anything?
    }
    catch (error){
    console.error(error);
    }
}


