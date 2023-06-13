import React from 'react'
// import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';


function AHome() {
    const { id } = useParams();

    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: '#F38B78' }}>
        <div>
            <p style={{ marginTop: "0px", float: "right", position:"absolute", top: "15px", right: "100px" }}>Logged in as Admin</p>
            <Link to="/" className="btn btn-danger m-2" style={{ marginTop: "0px", float: "right", position: "absolute", top: "0", right: "0" }}>Logout</Link>
        </div>

        <div style={{color: 'black', textAlign: 'center', paddingTop: '50px' }}>
            <h1>Home</h1>
            <h3>Welcome Admin!</h3>
            <p>As an admin, you can surf, redirect and have the privilege to modify the following pages. However, you can't edit other Admin details Enjoy but don't misuse your privileges!</p>
            <h6>Employee Details</h6> 
            <h6>Team Details</h6>
            <h6>All Details</h6>
            <Link to={`/employee/${id}`} className='btn btn-info m-2'>Employee Personal Details</Link>
            <Link to={`/team/${id}`} className='btn btn-info m-2'>Employee Team Details</Link>
            <Link to={`/all/${id}`} className='btn btn-info m-2'>All Details</Link>

        </div>
        </div>

    )
}

export default AHome


