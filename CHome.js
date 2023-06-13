import React, {useContext} from 'react'
// import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';
import UserContext from '../UserContext';

function CHome() {
    const { id } = useParams();
    const userContext = useContext(UserContext);
    // console.log(userContext.name);
   
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: '#F2F798' }}>
        <div style={{color: 'black', textAlign: 'center', paddingTop: '50px' }}>
            <h1>Home</h1>
            <h3>Welcome Client, {userContext.name}!</h3>
            <p>As a client, you can only view YOUR personal information!</p>
 
            <Link to={`/client/${id}`} className='btn btn-info m-2'>Client Personal Details</Link>
        </div>
        </div>
    )
}

export default CHome


