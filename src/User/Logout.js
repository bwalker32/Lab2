import React from 'react'

function Logout({ dispatch, user}) {
  return (
    <form 
    onSubmit={e => {
      e.preventDefault();
      dispatch({type: "LOGOUT"});
    }} 
    className="logout-form">
      Logged in as {user}
      <button type="submit" className="logout-button">Logout</button>
    </form>

    
  )
}

export default Logout