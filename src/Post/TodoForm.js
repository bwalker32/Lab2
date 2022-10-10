import React, { useState } from 'react'

function TodoForm({ addTodo, user, dispatch }) {

  const [input, setInput] = useState(''); // Post input
  const [title, setTitle] = useState(''); // Post title
  const [error, setError] = useState(""); // Error for post 

  // Getting current date 
  function getDate(){
    const date = new Date();
    return (`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`)
  }

  // Checking to see whether a title is used or not
  const handleDecision = (e) => {
    e.preventDefault();
    if (title === ""){
      setError("Please input a title for the post");
    }else{
      handleSubmit(e);
    }
    setInput("");
  }

  // Called if title is used 
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            id: Math.random() * 1000,
            author: user,
            text: input,
            dateCreated: `Date created: ${getDate()}`,
            dateCompleted: "",
            isComplete: false,
            title: title
        });
            setInput(''); // Resetting inputs and error
            setTitle('');
            setError("");
    }

  return(
    <form className='todo-form' 
    onSubmit={handleDecision} >

        {/* e => {
        e.preventDefault();
        dispatch({type: "CREATE_POST", 
            id: Math.random()*1000,
            author: user,
            text: input,
            dateCreated: `Date Created: ${getDate()}`,
            dateCompleted: "",
            isComplete: false,
            title: true
        })
    }}> */}

      {(error !== "") ? (<div className='error'>{error}</div>) : ""}
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
        value={input}
        className='todo-input' 
        onChange={e => setInput(e.target.value)}
        />

      <button className='todo-btn'>Add post</button>
    </form>
  );
}
export default TodoForm