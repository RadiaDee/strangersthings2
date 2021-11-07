// import
import React, {useState} from 'react';
import { createMessage } from '../api';
import { useHistory } from 'react-router-dom';    // this way or brosewe

const Messages = (token, content) => {

const[message, setMessage] = useState("");
const history = useHistory();


    return(
    <div>

        <form onSubmit= { async (event) => {
            event.preventDefault();
            const response = await createMessage(token, content);
            const newMessage= response.data.message.content;  //?

            setMessage(newMessage); // update messages array
            // or setMessage(""); ?
            // history.push('/posts');  // see if works
        }
        }>
        <h1>Write a message to this seller</h1>
        <textarea type='text' placeholder="type your message here" value={message}
        onChange={(event)=> {setMessage(event.target.value) }}/>

        <button> Deliver message</button>
        </form>
    </div>
)




    
}

export default Messages;