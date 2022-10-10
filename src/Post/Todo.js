import React from 'react';

function Todo({ todos, completeTodos, deleteTodos}) {

  return (
    // Mapping over todos 
    todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-complete' : 'todo-incomplete'} key={index}> {/* Setting className to complete or not complete */}
            <div key={todo.id} className="todo-title">
                Title: {todo.title}
            </div>
            <div key={todo.id} className="todo-author">
                Author: {todo.author}
            </div>
            <div key={todo.id} onClick={() => completeTodos(todo.id)} className="todo-text">
                Todo: {todo.text}
            </div>
            <div key={todo.id} className="todo-date-created">
                {todo.dateCreated}
            </div>
            <div className='action-buttons' key={todo.id}>
                <label for='edit' id='edit-label'>Edit:</label>
                <input type='checkbox' name='edit-box' id='edit-box'/>

                <label for='delete' id='delete-label'>Delete:</label>
                <input type='checkbox' name='delete-box' id='delete-box' onClick={() => deleteTodos(todo.id)}/>

                <label for='complete' id='complete-label'>Complete:</label>
                <input type='checkbox' name='complete-box' id='complete-box' onClick={() => completeTodos(todo.id)}/>
            </div>
            {(todo.isComplete === true) ? (<div key={todo.id} className="todo-date-completeted">{todo.dateCompleted}</div>) : ""}
        </div>
    ))
  )
}

export default Todo