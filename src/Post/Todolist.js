import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList({ user, dispatch }) {

    const [todos, setTodos] = useState([]); // Holding todos

    // Adding new todo
    const addTodo = (todo) => {
      const newTodo = [...todos, todo]; // Appending new todos
      setTodos(newTodo);
      //console.log(todos);
    }

    // Getting the current date
    function getDate(){
      const date = new Date();
      return (`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`)
    }

    // Finding the id in the todolist that === the id passed and setting to opposite of current state 
    const completeTodos = (id) => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id){
          todo.isComplete = !todo.isComplete;
          todo.dateCompleted = `Date completed: ${getDate()}`
        }
        return todo;
      })
      setTodos(updatedTodos);
    }

    // Finding the todo matching the id passed and removing from the todo list
    const deleteTodos = (id) =>{
      const newTodoArr = [...todos].filter(todo => todo.id !== id);
      setTodos(newTodoArr)
    }

  return (
    <div>
        <TodoForm addTodo={addTodo} user={user} dispatch={dispatch}/>
        <Todo todos={todos} completeTodos={completeTodos} deleteTodos={deleteTodos} user={user}/>
    </div>
  )
}

export default TodoList