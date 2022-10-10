import './App.css';
import appReducer from './reducer';
import { useReducer, useState } from 'react';
import Userbar from './User/UserBar';
import TodoList from './Post/Todolist';

function App() {

  const intitialState = {
    user: "",
    password: "",
    posts: []
  }

  const [state, dispatch] = useReducer(appReducer, intitialState);

  return (
    <div className="App">
      <Userbar user={state.user} dispatch={dispatch} />
    </div>
  );
}

export default App;
