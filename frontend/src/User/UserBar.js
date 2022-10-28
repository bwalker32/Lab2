import React, { useContext } from 'react';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import { StateContext } from '../Context/context';

export default function Userbar() {
    const { state } = useContext(StateContext);
    if (state.user) {        // Logged in 
        return <Logout />;
    } else {
        return(
            <>
                <Login />
                <Register />
            </>
        );
    }
}
