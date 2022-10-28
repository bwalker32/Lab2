import './App.css';
import appReducer from './reducer';
import { useReducer, useEffect } from 'react';
import { useResource } from 'react-request-hook';
import Userbar from './User/UserBar';
import TodoList from './Post/Todolist';
import CreateTodo from './Post/CreateTodo';
import { StateContext } from './Context/context';

function App() {

  const initialState = {
    user: "",
    todos: []
  }

  const [state, dispatch] = useReducer(appReducer, initialState); // dispatch calls the appReducer function to update the state

  const [todos, getTodos] = useResource(() => ({
    url: "/todos",
    method: "get"
  }));

  useEffect(getTodos, []);

  useEffect(() => {
    if (todos && todos.data){
      dispatch({type: "FETCH_TODOS", todos: todos.data.reverse()})
    }
  }, [todos]);

  return (
    <div className="App">
      <StateContext.Provider value={{state, dispatch}}>
          <Userbar />
          {state.user && 
          <>
            <TodoList />
            <CreateTodo />
          </>}
      </StateContext.Provider>
    </div>
  );
}

export default App;
