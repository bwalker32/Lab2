import React, { useContext, useEffect, useState } from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from '../Context/context';

function Register() {

  const { dispatch } = useContext(StateContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [user, register] = useResource((username, password) => ({
    url: 'users',
    method: 'post',
    data: {email: username, password},
  }));

  useEffect(() => {
    if (user && user.data && user.data.user.email) {                      // If all are true
      dispatch({ type: "REGISTER", username: user.data.user.email });
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
    </form>

  )
}

export default Register