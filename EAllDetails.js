import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";

function EAllDetails() {
    const navigate = useNavigate();
    const { id } = useParams();


    const [details, setDetails] = useState([])
    useEffect(() => {
        axios
        .get('http://localhost:8081/all')
        .then(res => setDetails(res.data))
        .catch(err => console.log(err));
    }, [])

   
    function handleBack(){
        navigate(`/ehome/${id}`);
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: '#C9F380' }}>
        <div>
            <p style={{ marginTop: "0px", float: "right", position:"absolute", top: "15px", right: "100px" }}>Logged in as Employee</p>
            <Link to="/" className="btn btn-danger m-2" style={{ marginTop: "0px", float: "right", position: "absolute", top: "0", right: "0" }}>Logout</Link>
        </div>
        <div style={{ color: 'black', textAlign: 'center', paddingTop: '50px' }}>
            <h1>Company Details</h1>
        </div>
        <div className='m-4 bg-white rounded p-3' style={{ backgroundColor: 'white', width: '70%',  padding: '30px' }}>
                <Link to={`/eemployee/${id}`} className='btn btn-info m-2'>Employee Personal Details</Link>
                <Link to={`/eteam/${id}`} className='btn btn-info m-2'>Employee Team Details</Link>
                
                <button className="btn btn-danger m-3" style={{ float: "right" }} onClick={handleBack}>Back to Home</button>
                
                <h2 className='m-3'>All Details (View Only)</h2>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Salary</th>
                        {/*  */}
                        <th>Team ID</th>
                        <th>Team Name</th>
                        <th>Department Name</th>
                        <th>Experience</th>
                        <th>Skills</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            details.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.ID}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.Email}</td>
                                    <td>{data.Age}</td>
                                    <td>{data.Salary}</td>
                                    {/*  */}
                                    <td>{data.Team_ID}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.Department}</td>
                                    <td>{data.YearsOfExperience}</td>
                                    <td>{data.Skills}</td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EAllDetails