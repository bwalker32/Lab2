import React, { useState } from 'react'

function Login({ dispatch }) {

  const [username, setUsername] = useState("");

  return (
    <form className="login-form" onSubmit={e => {
      e.preventDefault();
      dispatch({type: "LOGIN", username});
    }}
    >      
        <div className="login-form-inner">
            <h2>Login</h2>
            {/* {(error !== "") ? (<div className='error'>{error}</div>) : ""} */}

            <div className='form-group'>
                <label htmlFor='login-username'>Username:</label>
                <input 
                typeof='text' 
                name="login-username" 
                id="login-username" 
                placeholder='test' 
                onChange={e => setUsername(e.target.value)} 
                value={username} />
            </div>

            <div className='form-group'>
                <label htmlFor='login-password'>Password:</label>
                <input 
                typeof='password' 
                name="login-password" 
                id="login-password" 
                placeholder='test' />
            </div>

            <button type='submit' id='login-button'>Login</button>

        </div>
    </form>
  )
}

export default Login