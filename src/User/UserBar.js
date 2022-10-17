import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import TodoList from '../Post/Todolist';

export default function Userbar({user, dispatch}) {

    if (user) {        // Logged in 
        return <Logout user={user} dispatch={dispatch} />;
    } else {
        return(
            <>
                <Login dispatch={dispatch} />
                <Register dispatch={dispatch} />
            </>
        );
    }
}
