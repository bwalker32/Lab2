import React, { useEffect, useContext } from 'react';
import { StateContext } from '../Context/context';
import { useResource } from 'react-request-hook'
import TodoList from '../Post/Todolist';



export default function HomePage() {

    const { state, dispatch } = useContext(StateContext);
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

    return (
    <>
        {todos?.isLoading && "Posts loading..."} <TodoList />
    </>
    );
}