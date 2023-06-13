import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function CreateEmployee() {
    const [name, setName] = useState('')    
    const [email, setEmail] = useState('')   
    const [age, setAge] = useState('')   

    const navigate = useNavigate();
    
    function handleSubmit(event) {        
        event.preventDefault();        
        axios.post('http://localhost:8081/createemp', {name, email, age})        
        .then(res => {            
            console.log(res);            
            navigate('/');        
        }).catch(err => console.log(err));    
    }

    function handleBack(){
        navigate('/employee');
    }

    const isFormValid = () => {
        return (
            name.trim() !== '' &&
            email.trim() !== '' &&
            age.trim() !== '' 
        );
    };
    
    return (    
    <div className='d-flex flex-column vh-100 justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: '#F38B78' }}> 
        <div>
            <p style={{ marginTop: "0px", float: "right", position:"absolute", top: "15px", right: "100px" }}>Logged in as Admin</p>
            <Link to="/" className="btn btn-danger m-2" style={{ marginTop: "0px", float: "right", position: "absolute", top: "0", right: "0" }}>Logout</Link>
        </div>   
        <div style={{color: 'black', textAlign: 'center', paddingTop: '50px' }}>
            <h1>Company Details</h1>
        </div>    
        <div className='w-25 bg-white rounded p-4' style={{ backgroundColor: 'white' }}>            
            <form onSubmit={handleSubmit}>                
                <h2>Add Employee</h2>                
                    <div className='mb-2'>                    
                        <label htmlFor="">Name</label>                    
                        <input type="text" placeholder='Enter Name' className='form-control'                     
                        onChange={e => setName(e.target.value)}                    />                
                    </div>                
                    <div className='mb-2'>                    
                        <label htmlFor="">Email</label>                    
                        <input type="email" placeholder='Enter Email' className='form-control'                    
                        onChange={e => setEmail(e.target.value)}/>                
                    </div>       
                    <div className='mb-2'>                    
                        <label htmlFor="">Age</label>                    
                        <input type="age" placeholder='Enter Age' className='form-control'                    
                        onChange={e => setAge(e.target.value)}/>                
                    </div>           
                    <button className='btn btn-success' disabled={!isFormValid()}>Submit</button> 
                    <button className='btn btn-danger m-3' onClick={handleBack}>Back</button>            
            </form>       
        </div>    
    </div>  
    )
}

export default CreateEmployee