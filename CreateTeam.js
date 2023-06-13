import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function CreateTeam() {
    const [employee_ID, setEmployee_ID] = useState('') 
    const [team_ID, setTeam_ID] = useState('')     
    const [name, setName] = useState('')
    const [department, setDepartment] = useState('')
    const [yearsofexperience, setYearsOfExperience] = useState('')
    const [skills, setSkills] = useState('')

    const navigate = useNavigate();
    
    const isFormValid = () => {
        return (
            employee_ID.trim() !== '' &&
            team_ID.trim() !== '' &&
            name.trim() !== '' &&
            department.trim() !== '' &&
            yearsofexperience.trim() !== '' &&
            skills.trim() !== ''
        );
    };

    function handleSubmit(event) {        
        event.preventDefault();        
        axios
        .post('http://localhost:8081/createteam', {employee_ID, team_ID, name, department, yearsofexperience, skills})        
        .then(res => {            
            console.log(res);            
            navigate('/team');        
        }).catch(err => console.log(err));    
    }  

    function handleBack(){
        navigate('/team');
    }
    
    return (    
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: '#F38B78' }}>
        <div>
            <p style={{ marginTop: "0px", float: "right", position:"absolute", top: "15px", right: "100px" }}>Logged in as Admin</p>
            <Link to="/" className="btn btn-danger m-2" style={{ marginTop: "0px", float: "right", position: "absolute", top: "0", right: "0" }}>Logout</Link>
        </div>
        <div style={{color: 'black', textAlign: 'center', paddingTop: '50px' }}>
            <h1>Company Details</h1>
        </div>
        <div className='m-4 bg-white rounded p-3' style={{ backgroundColor: 'white', width: '25%',  padding: '30px' }}>
            <form onSubmit={handleSubmit}>                
                <h2>Add Team</h2>                
                    <div className='mb-2'>                    
                        <label htmlFor="">Employee ID</label>                    
                        <input 
                        type="text" 
                        placeholder='Enter Employee ID' 
                        className='form-control'                     
                        onChange={e => setEmployee_ID(e.target.value)}                    />                
                    </div>
                    <div className='mb-2'>                    
                        <label htmlFor="">Team ID</label>                    
                        <input 
                        type="text" 
                        placeholder='Enter Team ID'
                        className='form-control'                     
                        onChange={e => setTeam_ID(e.target.value)}                    />                
                    </div>                
                    <div className='mb-2'>                    
                        <label htmlFor="">Team Name</label>                    
                        <input 
                        type="text" 
                        placeholder='Enter Team Name' 
                        className='form-control'                    
                        onChange={e => setName(e.target.value)}/>                
                    </div> 
                    <div className='mb-2'>                    
                        <label htmlFor="">Department Name</label>                    
                        <input 
                        type="text" 
                        placeholder='Enter Department Name' 
                        className='form-control'                    
                        onChange={e => setDepartment(e.target.value)}/>                
                    </div> 
                    <div className='mb-2'>                    
                        <label htmlFor="">Experience</label>                    
                        <input 
                        type="text" 
                        placeholder='Enter Experience' 
                        className='form-control'                    
                        onChange={e => setYearsOfExperience(e.target.value)}/>                
                    </div> 
                    <div className='mb-2'>                    
                        <label htmlFor="">Skills</label>                    
                        <input 
                        type="text" 
                        placeholder='Enter Skills'
                        className='form-control'                    
                        onChange={e => setSkills(e.target.value)}/>                
                    </div>           
                    <button className='btn btn-success' disabled={!isFormValid()}>Submit</button> 
                    <button className='btn btn-danger m-3' onClick={handleBack}>Back</button> 
            </form>       
        </div>    
    </div>  
    )
}

export default CreateTeam
