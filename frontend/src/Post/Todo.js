import React, { useContext, useEffect } from 'react';
import { useResource } from 'react-request-hook';
import { Link } from 'react-router-dom';
import { StateContext } from '../Context/context';


function Todo({ title, author, content, _id, created, completed, dateCompleted, short = false}) {

    const { state, dispatch } = useContext(StateContext);

    const [todo, deleteTodo] = useResource((_id) => ({
        url: `/post/${_id}`,
        method: "delete",
        headers: {Authorization: `${state.user.access_token}`}
    }));


    const [complete, completeTodo] = useResource((_id) => ({
        url: `/post/${_id}`,
        method: "put",
        headers: {Authorization: `${state.user.access_token}`},
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
                onClick={(e) => {
                    e.preventDefault();
                    deleteTodo(_id);
                    dispatch({
                        type: "DELETE_TODO", 
                        payload: {_id: _id}
                    })
                }}/>

                <label htmlFor='complete' id='complete-label'>Complete:</label>
                <input type='checkbox' name='complete-box' id='complete-box'
                onClick={(e) => {
                    e.preventDefault();
                    completeTodo(_id);
                    dispatch({
                        type: "COMPLETED",
                        payload: {_id: _id}
                    })
                }}/>
            </div>
            {/* {(todo.isComplete === true) ? (<div key={todo.id} className="todo-date-completeted">{todo.dateCompleted}</div>) : ""} */}
        </div>
    )
}

export default Todo