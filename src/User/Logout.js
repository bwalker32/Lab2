import React from 'react'

function Logout({ dispatch, user }) {
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