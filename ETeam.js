import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";

function ETeam() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [team, setTeam] = useState([])
    useEffect(() => {
        axios
        .get('http://localhost:8081/team/')
        .then(res => setTeam(res.data))
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
        <div style={{color: 'black', textAlign: 'center', paddingTop: '50px' }}>
            <h1>Company Details</h1>
        </div>
        <div className='mt-4 bg-white rounded p-3' style={{ backgroundColor: 'white', padding: '30px' }}>
                <Link to={`/eemployee/${id}`} className='btn btn-info m-2'>Personal Details</Link>
                <Link to={`/eall/${id}`} className='btn btn-info m-2'>All Details</Link>
                <button className="btn btn-danger m-3" style={{ float: "right" }} onClick={handleBack}>Back to Home</button>
                
                <h2 className='m-3'>Employee Team Details</h2>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>Employee ID</th>
                        <th>Team ID</th>
                        <th>Team Name</th>
                        <th>Department Name</th>
                        <th>Experience</th>
                        <th>Skills</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            team.map((data, i) => (
                                <tr key={i}>
                                <td>{data.Employee_ID}</td>
                                <td>{data.Team_ID}</td>
                                <td>{data.Name}</td>
                                <td>{data.Department}</td>
                                <td>{data.YearsOfExperience}</td>
                                <td>{data.Skills}</td>
                                <td> {id == data.Employee_ID ? 
                                        (<Link to={`http://localhost:3000/eteam/updateteam/${data.Employee_ID}`} className='btn btn-primary m-2'>Update</Link>) : (<p>Not Allowed</p>)
                                }
                                </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ETeam