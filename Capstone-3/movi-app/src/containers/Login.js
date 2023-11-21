import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const register = () => {
    axios.post('http://localhost3306/register', {
      username: usernameReg, 
      password: passwordReg
    }).then((response)=> {
        console.log(response);
    });
  };

  const loginFunc = () => {
    axios.post('http://localhost3306/login', {
      username: username, 
      password: password
    }).then((response)=> {
        if (response.data.message) {
          setLogInStatus(response.data.message);
        } else {
          setLogInStatus(response.data[0].username);
        }
    });
  };

  const [logInStatus, setLogInStatus] = useState('');

  return (
    <div> 
      <h4>Sign up if you dont have an account yet!</h4>
      <div className='registration'>
        <h2>Registration</h2>
        <label>Username</label>
          <input type='text' 
                  onChange={(e)=> {setUsernameReg(e.target.value);
            }}  
          />
        <label>Password</label>
        <input type='text' 
                onChange={(e)=> {setPasswordReg(e.target.value);
            }}  
          />
        <button onClick={register}> Register! </button>
      </div>

      
      <h4>Log in to see all the movies!</h4>
      <div className='Login'>
        <h2>Login</h2>
        <label>Username</label>
          <input type='text'
                  placeholder='Username?'
                  onChange={(e) =>{
                      setUsername(e.target.value);
                  }}
          />
        <label>Password</label>
        <input type='text'
                  placeholder='Username?'
                  onChange={(e) =>{
                      setPassword(e.target.value);
                  }}
          />
        <button onClick={loginFunc}> Login! </button>
      </div>
      <h3>(logInStatus)</h3>
    </div>
  );
}

export default Login;
