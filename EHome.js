import React from 'react'
// import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';


function EHome() {
    const { id } = useParams();

    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: '#C9F380' }}>
        <div>
            <p style={{ marginTop: "0px", float: "right", position:"absolute", top: "15px", right: "100px" }}>Logged in as Employee</p>
            <Link to="/" className="btn btn-danger m-2" style={{ marginTop: "0px", float: "right", position: "absolute", top: "0", right: "0" }}>Logout</Link>
        </div>
        <div style={{color: 'black', textAlign: 'center', paddingTop: '50px' }}>
            <h1>Home</h1>
            <h3>Welcome Employee!</h3>
            <p>As an employee, you can surf and redirect through the following pages and view all information but you won't be able to edit or modify the information. Have fun surfing!</p>
            <h6>Employee Details</h6> 
            <h6>Team Details</h6>
            <h6>All Details</h6>
            <Link to={`/eemployee/${id}`} className='btn btn-info m-2'>Employee Personal Details</Link>
            <Link to={`/eteam/${id}`} className='btn btn-info m-2'>Employee Team Details</Link>
            <Link to={`/eall/${id}`} className='btn btn-info m-2'>All Details</Link>
        </div>
        </div>
    )
}

export default EHome


