import React, { useContext, useState, useEffect } from 'react'
import { StateContext } from '../Context/context';
import { useResource } from 'react-request-hook';

function Login() {
  const { dispatch } = useContext(StateContext);
  const [username, setUsername] = useState("");

  const [loginFailed, setLoginFailed] = useState(false);    // Managing login and password state
  const [password, setPassword] = useState("");
  
  const [user, login] = useResource((username, password) => ({
    url: "/login",
    method: "post",
    data: { email: username, password },
  }));

  useEffect(() => {
    if (user?.data?.user) {
      setLoginFailed(false);                                        // Handling successful login 
      dispatch({ type: "LOGIN", username: user.data.user.email });    
    }

    if (user?.error) {
      console.log(user?.error);
      setLoginFailed(true);                                        // Handling unsuccessful login
    }
  }, [user]);

  return (
    <>
      {loginFailed && (
        <span style={{color: 'red'}}>Invalid username or password</span>
      )}
      <form className="login-form" onSubmit={e => {
        e.preventDefault();
        login(username, password);
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
                  onChange={e => setUsername(e.target.value)} 
                  value={username} />
              </div>

              <div className='form-group'>
                  <label htmlFor='login-password'>Password:</label>
                  <input 
                  typeof='password' 
                  name="login-password" 
                  id="login-password" 
                  onChange={e => setPassword(e.target.value)}/>
              </div>

              <button type='submit' id='login-button'>Login</button>

          </div>
      </form>
    </>
  )
}

export default Login