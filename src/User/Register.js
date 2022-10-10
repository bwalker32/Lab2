import React, { useState } from 'react'

function Register({ dispatch }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  return (
    <form className="register-form" onSubmit={e => {
      e.preventDefault();
      dispatch({type: "REGISTER", password});
    }}
    >      
        <div className="register-form-inner">
            <h2>Register</h2>
            {/* {(error !== "") ? (<div className='error'>{error}</div>) : ""} */}

            <div className='form-group'>
                <label htmlFor='register-username'>Username:</label>
                <input 
                typeof='text' 
                name="register-username" 
                id="register-username" 
                placeholder='test' 
                onChange={e => setUsername(e.target.value)} 
                value={username} />
            </div>

            <div className='form-group'>
                <label htmlFor='register-password'>Password:</label>
                <input 
                typeof='password' 
                name="register-password" 
                id="register-password" 
                placeholder='test'
                onChange={e => setPassword(e.target.value)}
                value={password} />
            </div>

            <div className='form-group'>
                <label htmlFor='register-password-repeat'>Confirm Password:</label>
                <input 
                typeof='password' 
                name="register-password-repeat" 
                id="register-password-repeat" 
                placeholder='test'
                onChange={e => setPasswordRepeat(e.target.value)}
                value={passwordRepeat} />
            </div>

              

            <button type='submit' value="Register" id='login-button'>Login</button>

        </div>
    </form>

  )
}

export default Register