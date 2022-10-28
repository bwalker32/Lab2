import React, { useContext, useState } from 'react';
import { StateContext } from '../Context/context';
import Todo from './Todo';

function TodoList() {   // todo array passed through

  const { state, dispatch } = useContext(StateContext);
  const { todos } = state;

  return (
    <div>
        {/* <CreateTodo addTodo={addTodo} user={user} dispatch={dispatch}/> */}
        {todos.map((todo, idx) => (
            <Todo {...todo} key={'todo-' + idx} dispatch={dispatch}/>
        ))}   
    </div>
  )
}

export default TodoList