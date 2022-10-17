import React, { useState } from 'react'

function CreateTodo({ user, dispatch }) {

  const [content, setContent] = useState(''); // Post input
  const [title, setTitle] = useState(''); // Post title
  const [error, setError] = useState(""); // Error for post 

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

  return(
    <form className='todo-form' 
    onSubmit={e => {
        e.preventDefault();
        dispatch({type: "CREATE_TODO", payload: {title: title, content: content, author: user}});
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