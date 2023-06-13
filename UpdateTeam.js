import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function UpdateTeam() {
  const [team, setTeam] = useState({
    team_ID: "",
    name: "",
    department: "",
    yearsfexperience: "",
    skills: ""
  });

  const { employee_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/team/${employee_id}`)
      .then(res => {
        const teamData = res.data;
        if (Array.isArray(teamData) && teamData.length > 0) {
          console.log(teamData);
          setTeam(teamData[0]);
        }
      })
      .catch(err => console.log(err));
  }, [employee_id]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`http://localhost:8081/team/updateteam/${employee_id}`, team)
      .then(res => {
        console.log(res);
        navigate(`/team/${employee_id}`);
      })
      .catch(err => console.log(err));
  }

  function handleBack() {
    navigate(`/team/${employee_id}`);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setTeam(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: '#F38B78' }}>
        <div>
            <p style={{ marginTop: "0px", float: "right", position:"absolute", top: "15px", right: "100px" }}>Logged in as Admin</p>
            <Link to="/" className="btn btn-danger m-2" style={{ marginTop: "0px", float: "right", position: "absolute", top: "0", right: "0" }}>Logout</Link>
        </div>
        <div style={{ color: 'black', textAlign: 'center', paddingTop: '50px' }}>
            <h1>Company Details</h1>
        </div>
        <div className='m-4 bg-white rounded p-3' style={{ backgroundColor: 'white', width: '25%',  padding: '30px' }}>
        <form onSubmit={handleSubmit}>
          <h2>Update Team</h2>
          <div className="mb-2">
            <label htmlFor="">Team ID</label>
            <input
              type="text"
              className="form-control"
              name="Team_ID"
              value={team.Team_ID}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Team Name</label>
            <input
              type="text"
              className="form-control"
              name="Name"
              value={team.Name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Department Name</label>
            <input
              type="text"
              className="form-control"
              name="Department"
              value={team.Department}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Experience</label>
            <input
              type="text"
              className="form-control"
              name="YearsOfExperience"
              value={team.YearsOfExperience}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Skills</label>
            <input
              type="text"
              className="form-control"
              name="Skills"
              value={team.Skills}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-success">Update</button>
          <button className="btn btn-danger m-3" onClick={handleBack}>
            Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateTeam;
