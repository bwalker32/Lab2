import React, { useState } from 'react';
import CreateTodo from "./CreateTodo";
import Todo from './Todo';

function TodoList({ todos=[], dispatch }) {   // todo array passed through

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