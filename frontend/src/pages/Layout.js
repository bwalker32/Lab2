import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { StateContext } from "../Context/context";
import UserBar from "../User/UserBar";
// import { Link } from 'react-router-dom';


export default function Layout () {
    const { state } = useContext(StateContext);
    const { user } = state;

    return (
    <>
        <React.Suspense fallback={"Loading..."}>
            <UserBar />
        </React.Suspense> 
        <br />
        {/* {user && <Link to="/post/create">Create New Post</Link> } */}
        <Outlet />
    </>
    );
}