import './App.css';
import appReducer from './reducer';
import React, { useReducer, useEffect } from 'react';
import { StateContext } from './Context/context';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPage from './pages/PostPage'
import CreateTodo from './Post/CreateTodo';
import Todolist from './Post/Todolist';
import { useResource } from 'react-request-hook';

function App() {

  const initialState = {
    user: "",
    todos: []
  }

  const [state, dispatch] = useReducer(appReducer, initialState); // dispatch calls the appReducer function to update the state
  
  const [todos, getTodos] = useResource(() => ({
    url: "/post",
    method: "get",
    headers: { Authorization: `${state?.user?.access_token}` },
  }));

  useEffect(() => {
    getTodos();
    }, [state?.user?.access_token]);

  useEffect(() => {
    if (todos && todos.data === false && todos.data){
      dispatch({type: "FETCH_TODOS", todos: todos.data.todos.reverse()})
    }
  }, [todos]);

//   return (
//     <div className="App">
//       <StateContext.Provider value={{state, dispatch}}>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Layout />}>
//               <Route index element={<HomePage />} />
//             </Route>
//             <Route path="/post" element={<Layout />}>
//               <Route path="/post/create" element={<CreateTodo />} />
//               <Route path="/post/:id" element={<PostPage />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </StateContext.Provider>
//     </div>
//   );
// }
return (
  <div>
    <StateContext.Provider value = {{state, dispatch}}>
      <Layout/>
      {state.user && (
        <>
          <Todolist />
          <CreateTodo/>
        </>
      )}
    </StateContext.Provider>
  </div>
);
}

export default App;
