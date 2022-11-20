import React, { useContext, useState, useEffect } from 'react';
import { useResource } from 'react-request-hook';
import { StateContext } from '../Context/context';
import { useNavigate } from 'react-router-dom';

function CreateTodo() {

  const { state, dispatch } = useContext(StateContext);
  const { user } = state;
  const [content, setContent] = useState(''); // Post input
  const [title, setTitle] = useState(''); // Post title
  // const navigate = useNavigate();
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

  const [todo, createTodo] = useResource(({ title, content, author}) => ({
    url: '/post',
    method: 'post',
    headers: {Authorization: `${state.user.access_token}`},
    data: { title, content },
  }));

  useEffect(() => {
    if (todo.isLoading === false && todo.data) {
      console.log(todo);
      dispatch({
        type: "CREATE_TODO",
        title: todo.data.title,
        content: todo.data.content,
        _id: todo.data._id,
        author: user.username,
      });
    }
  }, [todo]);

  // useEffect(() => {
  //   navigate(`/post/${todo.data._id}`);
  // }, [todo])

  return(
    <form className='todo-form' 
    onSubmit={e => {
      e.preventDefault();
      createTodo({title, content, author: user })
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