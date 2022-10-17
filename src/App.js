import './App.css';
import appReducer from './reducer';
import { useReducer, useState } from 'react';
import Userbar from './User/UserBar';
import TodoList from './Post/Todolist';
import CreateTodo from './Post/CreateTodo';

function App() {

  const initialState = {
    user: "",
    todos: []
  }
  
  const [state, dispatch] = useReducer(appReducer, initialState); // dispatch calls the appReducer function to update the state

  return (
    <div className="App">
        <Userbar user={state.user} dispatch={dispatch} />
        {state.user &&
          (<>
            <TodoList todos={state.todos} dispatch={dispatch}/>
            <CreateTodo user={state.user} todoes={state.todos} dispatch={dispatch} />
          </>
          )}
    </div>
  );
}

export default App;
