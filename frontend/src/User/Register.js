import React, { useContext, useEffect, useState } from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from '../Context/context';

function Register() {

  const { dispatch } = useContext(StateContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [status, setStatus] = useState("");

  const [user, register] = useResource((username, password) => ({
    url: "auth/register",
    method: "post",
    data: { username, password, passwordConfirmation: password },
  }));

  useEffect(() => {
    if (user && user.isLoading === false && (user.data || user.error)) {
      if (user.error) {
        setStatus("Registration failed, please try again later.");
    } else {
        setStatus("Registration successful. You may now login.");
    }
    }
  }, [user]);

  return (
    <form className="register-form" onSubmit={e => {
      e.preventDefault();
      register(username, password);
    }}
    >      
        <div className="register-form-inner">
            <h2>Register</h2>

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
                value={passwordRepeat}
                />
            </div>

              

            <button type='submit' value="Register" id='register-button'
            disabled={
              username.length === 0 ||
              password.length === 0 ||
              password !== passwordRepeat
              }>
                Register
              </button>

        </div>
        <p>{status}</p>
    </form>

  )
}

export default Register