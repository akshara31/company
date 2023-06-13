import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,  Route} from "react-router-dom";

import Login from './Login';

import Employee from './admin/Employee';
import CreateEmployee from './admin/CreateEmployee';
import UpdateEmployee from './admin/UpdateEmployee';
import Team from './admin/Team'
import CreateTeam from './admin/CreateTeam';
import UpdateTeam from './admin/UpdateTeam';
import AllDetails from './admin/AllDetails';
import AHome from './admin/AHome';

import OHome from './org/OHome';
import OEmployee from './org/OEmployee';
import OCreateEmployee from './org/OCreateEmployee';
import OUpdateEmployee from './org/OUpdateEmployee';
import OTeam from './org/OTeam'
import OCreateTeam from './org/OCreateTeam';
import OUpdateTeam from './org/OUpdateTeam';
import OAllDetails from './org/OAllDetails';

import EHome from './employee/EHome';
import EEmployee from './employee/EEmployee';
import ETeam from './employee/ETeam';
import EAllDetails from './employee/EAllDetails';
import EUpdateEmployee from './employee/EUpdateEmployee';
import EUpdateTeam from './employee/EUpdateTeam';

import CHome from './client/CHome';
import Client from './client/Client';
import UpdateClient from './client/UpdateClient';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          {/* Admin View */}
          <Route path='/ahome/:id' element={<AHome/>}></Route>
          <Route path='/employee/:id' element={<Employee/>}></Route>
          <Route path='/createemp' element={<CreateEmployee/>}></Route>
          <Route path='/employee/updateemp/:id' element={<UpdateEmployee/>}></Route>
          <Route path='/team/:id' element={<Team/>}></Route>
          <Route path='/createteam' element={<CreateTeam />}></Route>
          <Route path='/team/updateteam/:employee_id' element={<UpdateTeam/>}></Route>
          <Route path='/all/:id' element={<AllDetails/>}></Route>
          {/* Org View */}
          <Route path='/ohome/:id' element={<OHome/>}></Route>
          <Route path='/oemployee/:id' element={<OEmployee/>}></Route>
          <Route path='/ocreateemp' element={<OCreateEmployee/>}></Route>
          <Route path='/oemployee/updateemp/:id' element={<OUpdateEmployee/>}></Route>
          <Route path='/oteam/:id' element={<OTeam/>}></Route>
          <Route path='/ocreateteam' element={<OCreateTeam />}></Route>
          <Route path='/oteam/updateteam/:employee_id' element={<OUpdateTeam/>}></Route>
          <Route path='/oall/:id' element={<OAllDetails/>}></Route>
          {/* Employee View */}
          <Route path='/ehome/:id' element={<EHome/>}></Route>
          <Route path='/eemployee/:id' element={<EEmployee/>}></Route>
          <Route path='/eteam/:id' element={<ETeam />}></Route>
          <Route path='/eall/:id' element={<EAllDetails/>}></Route>
          <Route path='/eemployee/updateemp/:id' element={<EUpdateEmployee/>}></Route>
          <Route path='/eteam/updateteam/:employee_id' element={<EUpdateTeam/>}></Route>
          {/* Client View */}
          <Route path='/chome/:id' element={<CHome/>}></Route>
          <Route path='/client/:id' element={<Client/>}></Route>
          <Route path='/client/updatecli/:id' element={<UpdateClient/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;