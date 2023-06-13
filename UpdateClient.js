import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function UpdateClient() {
    const [client, setClient] = useState({
        name: "",
        email: "",
        age: ""
      });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios
          .get(`http://localhost:8081/client/${id}`)
          .then(res => {
            const cliData = res.data;
            if (Array.isArray(cliData) && cliData.length > 0) {
                setClient(cliData[0]);
            }
          })
          .catch(err => console.log(err));
      }, [id]);

    function handleSubmit(event) {        
        event.preventDefault();        
        axios
        .put(`http://localhost:8081/client/updatecli/${id}`, client)        
        .then(res => {            
            console.log(res);            
            navigate(`/client/${id}`);        
        })
        .catch(err => console.log(err));    
    }  
 
    function handleBack(){
        navigate(`/client/${id}`);
    }
    

    function handleChange(event) {
        const { name, value } = event.target;
        setClient(prevState => ({
          ...prevState,
          [name]: value
        }));
      }
    
    return (    
    <div className='d-flex flex-column vh-100 justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: '#F2F798' }}>
        <div>
            <p style={{ marginTop: "0px", float: "right", position:"absolute", top: "15px", right: "100px" }}>Logged in as Admin</p>
            <Link to="/" className="btn btn-danger m-2" style={{ marginTop: "0px", float: "right", position: "absolute", top: "0", right: "0" }}>Logout</Link>
        </div>        
        <div style={{ color: 'black', textAlign: 'center', paddingTop: '50px' }}>
            <h1> Client Details </h1>
        </div>        
        <div className='m-4 w-25 bg-white rounded p-4' style={{ backgroundColor: 'white' }}>            
            <form onSubmit={handleSubmit}>                
                <h2>Update Client</h2>                
                    <div className="mb-2">                    
                        <label htmlFor="">Name</label>                    
                        <input 
                            type="text" 
                            className='form-control'  
                            name="Name"
                            value={client.Name}                  
                            onChange={handleChange}                    
                        />                
                    </div>                
                    <div className="mb-2">                    
                        <label htmlFor="">Email</label>                    
                        <input 
                            type="email" 
                            className='form-control' 
                            name="Email"
                            value={client.Email}                   
                            onChange={handleChange}
                        />                
                    </div>       
                    <div className="mb-2">                    
                        <label htmlFor="">Age</label>                    
                        <input 
                            type="age" 
                            className='form-control' 
                            name="Age"  
                            value={client.Age}                
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

export default UpdateClient;