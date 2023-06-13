import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function EUpdateEmployee() {
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        age: "",
        salary: ""
      });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get(`http://localhost:8081/employee/${id}`)
          .then(res => {
            const empData = res.data;
            if (Array.isArray(empData) && empData.length > 0) {
              console.log(empData);
              setEmployee(empData[0]);
            }
          })
          .catch(err => console.log(err));
      }, [id]);
    
    function handleSubmit(event) {        
        event.preventDefault();        
        axios
        .put(`http://localhost:8081/employee/updateemp/${id}`, employee)        
        .then(res => {            
            console.log(res);            
            navigate(`/eemployee/${id}`);        
        })
        .catch(err => console.log(err));    
    }  

    function handleBack(){
        navigate(`/eemployee/${id}`);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setEmployee(prevState => ({
          ...prevState,
          [name]: value
        }));
      }
    
    return (    
    <div className='d-flex flex-column vh-100 justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: '#C9F380' }}>
        <div>
            <p style={{ marginTop: "0px", float: "right", position:"absolute", top: "15px", right: "100px" }}>Logged in as Employee</p>
            <Link to="/" className="btn btn-danger m-2" style={{ marginTop: "0px", float: "right", position: "absolute", top: "0", right: "0" }}>Logout</Link>
        </div>        
        <div style={{ color: 'black', textAlign: 'center', paddingTop: '50px' }}>
            <h1> Company Details </h1>
        </div>        
        <div className='m-4 w-25 bg-white rounded p-4' style={{ backgroundColor: 'white' }}>            
            <form onSubmit={handleSubmit}>                
                <h2>Update Employee</h2>                
                    <div className="mb-2">                    
                        <label htmlFor="">Name</label>                    
                        <input 
                            type="text" 
                            className='form-control'  
                            name="Name"
                            value={employee.Name}                  
                            onChange={handleChange}                    
                        />                
                    </div>                
                    <div className="mb-2">                    
                        <label htmlFor="">Email</label>                    
                        <input 
                            type="email" 
                            className='form-control' 
                            name="Email"
                            value={employee.Email}                   
                            onChange={handleChange}
                        />                
                    </div>       
                    <div className="mb-2">                    
                        <label htmlFor="">Age</label>                    
                        <input 
                            type="age" 
                            className='form-control' 
                            name="Age"  
                            value={employee.Age}                
                            onChange={handleChange}
                        />                
                    </div>      
                    <div className='mb-2'>                    
                        <label htmlFor="">Salary</label>                    
                        <input 
                            type="text" 
                            disabled
                            className='form-control' 
                            name="Salary"  
                            placeholder="Not Allowed to Modify"               
                            onChange={handleChange}
                        />                
                    </div>     
                    <button className='btn btn-success'>Update</button>            
                    <button className='btn btn-danger m-3' onClick={handleBack}>
                        Back
                    </button> 
            </form>       
        </div>    
    </div>  
    );
}

export default EUpdateEmployee;