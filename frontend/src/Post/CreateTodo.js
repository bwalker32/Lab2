import React, { useContext, useState } from 'react';
import { useResource } from 'react-request-hook';
import { StateContext } from '../Context/context';
import { v4 as uuidv4 } from "uuid";

function CreateTodo() {

  const { state, dispatch } = useContext(StateContext);
  const { user } = state;
  const [content, setContent] = useState(''); // Post input
  const [title, setTitle] = useState(''); // Post title
  // const [error, setError] = useState(""); // Error for post 

  // Checking to see whether a title is used or not
  // const handleDecision = (e) => {
  //   e.preventDefault();
  //   if (title === ""){
  //     setError("Please input a title for the post");
  //   }else{
  //     handleSubmit(e);
  //   }
  //   setInput("");
  // }

  // Called if title is used 
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     addTodo({
    //         id: Math.random() * 1000,
    //         author: user,
    //         text: input,
    //         dateCreated: `Date created: ${getDate()}`,
    //         dateCompleted: "",
    //         isComplete: false,
    //         title: title
    //     });
    //         setInput(''); // Resetting inputs and error
    //         setTitle('');
    //         setError("");
    // }

  const [todo, createTodo] = useResource(({ title, content, author, id }) => ({
    url: "/todos",
    method: "post",
    data: { title, content, author, id ,completed: false },
  }));

  return(
    <form className='todo-form' 
    onSubmit={e => {
      let id = uuidv4()
      createTodo({title, content, author: user, id, completed: false})
      e.preventDefault();
      dispatch({
        type: "CREATE_TODO", 
        payload: {
          title: title, 
          content: content, 
          author: user,
          id: id,
          completed: false,
        }});
      }}>

      {/* {(error !== "") ? (<div className='error'>{error}</div>) : ""} */}
       {/* Raise error if error does !== "" */}

      <input type='text' 
        placeholder='Title here...'
        name='text' 
        value={title}
        className='title-input' 
        onChange={e => setTitle(e.target.value)}
        />

      <input 
        type='text' 
        placeholder='Initial post here...'
        name='text' 
        value={content}
        className='todo-input' 
        onChange={e => setContent(e.target.value)}
        />

      <button type="submit" className='todo-btn'>Add post</button>
    </form>
  );
}
export default CreateTodo