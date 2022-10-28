import React from 'react';
import { useResource } from 'react-request-hook';


function Todo({ title, author, content, id, created, completed, dispatch, dateCompleted}) {

    const [todo, deleteTodo] = useResource(({ id }) => ({
        url: `/todos/${id}`,
        method: "delete",
    }));

    const [complete, completeTodo] = useResource(({ id }) => ({
        url: `/todos/${id}`,
        method: "patch",
        data: {completed: !completed}
    }))

    return (
        // Mapping over todos 
        <div className='individual-todo'> {/* Setting className to complete or not complete */}
            <div className="todo-title">
                Title: {title}
            </div>
            <div className="todo-author">
                Author: {author}
            </div>
            <div className='todo-content'>
                Todo: {content}
            </div>
            <div className="todo-date-created">
                {created}
            </div>
        {completed ? (<div>Completed: {dateCompleted}</div>) : ""}
            <div className='action-buttons'>
                <label htmlFor='edit' id='edit-label'>Edit:</label>
                <input type='checkbox' name='edit-box' id='edit-box'/>

                <label htmlFor='delete' id='delete-label'>Delete:</label>
                <input type='checkbox' name='delete-box' id='delete-box' 
                onClick={() => {
                    deleteTodo({ id })
                    dispatch({type: "DELETE_TODO", payload: {id: id}})
                }}/>

                <label htmlFor='complete' id='complete-label'>Complete:</label>
                <input type='checkbox' name='complete-box' id='complete-box'
                onClick={() => {
                    completeTodo({ id })
                    dispatch({type: "COMPLETED", payload: {id: id}})
                }}/>
            </div>
            {/* {(todo.isComplete === true) ? (<div key={todo.id} className="todo-date-completeted">{todo.dateCompleted}</div>) : ""} */}
        </div>
    )
}

export default Todo