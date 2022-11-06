import React, { useContext } from 'react';
import Login from './Login';
import Register from './Register';
import { StateContext } from '../Context/context';

const Logout = React.lazy(() => import("./Logout"));

export default function Userbar() {

    const { state } = useContext(StateContext);
    if (state.user) {        // Logged in 
        return <Logout />;
    } else {
        return(
            <div className='userbar'>
                <div className='bg-img'></div>
                <div className='user-info'>
                    <div className="glass">
                        <Login />
                        <Register />
                    </div>
                </div>
            </div>
        );
    }
}