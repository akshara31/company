import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from './UserContext';

function Login(){
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(' ');

  const handleLogin = async () => {
    try{
        const response = await axios.post('http://localhost:8081/login', {username, password});
        const { role } = response.data;
        const { ID } = response.data;
        const uname = username;
        // console.log(uname);
        
        if(role ==='admin'){
            userContext.setId(ID);
            navigate(`/ahome/${ID}`);
        }  
        if(role ==='org'){
          userContext.setId(ID);
          navigate(`/ohome/${ID}`);
        }          
        else if(role ==='employee'){
            userContext.setId(ID);
            navigate(`/ehome/${ID}`);
        }
        else if(role === 'client'){
            userContext.setId(ID);
            userContext.setName(uname);
            // console.log(userContext.name);
            navigate(`/chome/${ID}`);
        }
        else{
          console.error('Login failed');
        }
    }
    catch(error){
        if (error.response && error.response.status === 401) {
            setMessage("Invalid Credentials");
            console.log('Invalid credentials');
        }
        else {
            console.log('Error:', error);
        }
    }
  };

  const isFormValid = () => {
    return (username.trim() !== '' && password.trim() !== '');
    };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: '#D5BBF2 ' }}>
    <div style={{ color: 'black', textAlign: 'center', paddingTop: '50px' }}>
        <h1>Login Page</h1>
        <h5>Please Log in as Admin or Employee to Access Employee Details</h5>
    </div>
    <div>
      <div>
        <label style={{ fontSize: "18px" }}>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style = {{ margin: "10px" }}
        />
      </div>
      <div>
        <label style={{ fontSize: "18px" }}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style = {{ margin: "14px" }}
        />
        <div className='d-flex flex-column justify-content-center align-items-center' style ={{ color: "darkred", fontWeight: "bold" }}>
          <p>{message}</p>
        </div>
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <button 
            onClick={handleLogin}
            className='btn btn-info m-2'
            disabled = {!isFormValid()}>
                Login
        </button>
      </div>
    </div>
    </div>
  );
};

export default Login;
