import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";

function Client() {
    const [client, setClient] = useState({
        name: "",
        email: "",
        age: ""
    })
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
    }, [id])

    function handleBack(){
        navigate(`/chome/${id}`);
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: '#F2F798' }}>
        <div>
            <p style={{ marginTop: "0px", float: "right", position:"absolute", top: "15px", right: "100px" }}>Logged in as Client</p>
            <Link to="/" className="btn btn-danger m-2" style={{ marginTop: "0px", float: "right", position: "absolute", top: "0", right: "0" }}>Logout</Link>
        </div>
        <div style={{color: 'black', textAlign: 'center', paddingTop: '50px' }}>
            <h1>Client Details</h1>
        </div>
            <div className='mt-4 w-50 bg-white rounded p-3' style={{ width: '100px', backgroundColor: 'white', padding: '30px' }}>
              
                <button className="btn btn-danger m-3" style={{ float: "right" }} onClick={handleBack}>Back to Home</button>

                <h2 className='m-3'>Client Personal Details</h2>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>Client ID</th>    
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                                <tr>
                                    <td>{client.ID}</td>
                                    <td>{client.Name}</td>
                                    <td>{client.Email}</td>
                                    <td>{client.Age}</td>
                                    <td>
                                        <Link to={`http://localhost:3000/client/updatecli/${client.ID}`} className='btn btn-primary m-2'>Update</Link> 
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Client;
