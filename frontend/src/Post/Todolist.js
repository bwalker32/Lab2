import React, { useContext, useState } from 'react';
import { StateContext } from '../Context/context';
import Todo from './Todo';

function TodoList() {   // todo array passed through

  const { state, dispatch } = useContext(StateContext);
  const { todos } = state;

  return (
    <div>
      {todos.length === 0 && <h2>No todos found.</h2>}
      {todos.length > 0 && todos.map((p, i) => <Todo {...p} short={true} key={p._id} />)}
    </div>
  )
}

export default TodoList;