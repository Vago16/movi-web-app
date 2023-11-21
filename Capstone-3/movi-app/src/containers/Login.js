import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const register = () => {
    axios.post('http://localhost3001/', {
      username: usernameReg, 
      password: passwordReg
    }).then((response)=> {
        console.log(response);
    });
  };

  return (
    <div> 
      <h4>Log in to see all the movies!</h4>
      <div className='registration'>
        <h2>Registration</h2>
        <label>Username</label>
          <input type='text' onChange={(e)=> {setUsernameReg(e.target.value);
            }}  
          />
        <label>Password</label>
        <input type='text' onChange={(e)=> {setPasswordReg(e.target.value);
            }}  
          />
        <button onClick={register}> Register! </button>
      </div>
      <h4>Or sign up if you dont have an account yet!</h4>
      <div className='Login'>
        <h2>Login</h2>
        <label>Username</label>
          <input type='text' />
        <label>Password</label>
          <input type='text' />
        <button> Register! </button>
      </div>
    </div>
  );
}

export default Login;
