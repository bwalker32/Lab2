import React, { useContext } from 'react'
import { StateContext } from '../Context/context';

function Logout() {

  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  return (
    <form 
    onSubmit={e => {
      e.preventDefault();
      dispatch({type: "LOGOUT"});
      console.log(user);
    }} 
    className="logout-form">
      Logged in as {user}
      <button type="submit" className="logout-button">Logout</button>
    </form>

    
  )
}

export default Logout