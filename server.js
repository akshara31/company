const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());

app.use(cors());

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'crud'
});

db.connect((err) => {  
    if(!err) {  
        console.log("DB Connection Succeed");  
    }  
    else{  
        console.log("DB connect Failed \n Error :" + JSON.stringify(err,undefined,2));  
    }  
}); 

app.get('/employee', (req, res) => {
    const sql = "SELECT * FROM employee";
    db.query(sql, (err, data) => {
        if(err) 
        {   
            console.log(err);
            return res.json("error");
        }
        return res.json(data);
    });
});

app.get('/employee/:ID', (req, res) => {
    const sql = "SELECT * FROM employee where ID = ?";
    const id = req.params.ID;

    db.query(sql, [id], (err, data) => {
        if(err) {   
        console.log(err);
        return res.json("error");
        }
        return res.json(data);
    });
});

app.get('/client/:ID', (req, res) => {
    const sql = "SELECT * FROM client where ID = ?";
    const id = req.params.ID;

    db.query(sql, [id], (err, data) => {
        if(err) {   
        console.log(err);
        return res.json("error");
        }
        return res.json(data);
    });
});


app.get('/team', (req, res) => {
    const sql = "SELECT * FROM team";
    db.query(sql, (err, data) => {
        if(err) 
        {   
            console.log(err);
            return res.json("error");
        }
        return res.json(data);
    });
});

app.get('/team/:Employee_ID', (req, res) => {
    const sql = "SELECT * FROM Team where Employee_ID = ?";
    const employee_id = req.params.Employee_ID;

    db.query(sql, [employee_id], (err, data) => {
        if(err) {   
        console.log(err);
        return res.json("error");
        }
        return res.json(data);
    });
    
});

app.get('/all', (req, res) => {
    const sql = "SELECT e.ID, e.Name, e.Email, e.Age, e.Salary, t.Team_ID, t.Name, t.Department, t.YearsOfExperience, t.Skills FROM employee e INNER JOIN Team t ON e.ID = t.Employee_ID;";
    db.query(sql, (err, data) => {
        if(err) 
        {   
            console.log(error);
            return res.json("error");
        }
        return res.json(data);
    });
});

app.post('/login', (req,res) => {
    const { username, password } = req.body;

    const sql = "SELECT * from login WHERE username = ? AND password = ?";
   
    db.query(sql, [username, password], (err, results) => {
        if(err) 
        {   console.log(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if(results.length === 1) {
            const { role } = results[0];
            const { ID } = results[0];
            return res.json({ role, ID });
        }
        else{
            return res.status(401).json({ error: 'Invalid credentials' });
        }
    });
});

app.post('/createemp', (req, res) => {
    const sql = "INSERT INTO employee (ID, Name, Email, Age) VALUES(?)";
    const values = [
        req.body.id,
        req.body.name,
        req.body.email,
        req.body.age
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    });
});


app.post('/createteam', (req, res) => {
    const sql = "INSERT INTO Team (employee_id, name, department, yearsofexperience, skills) VALUES(?)";
    const values = [
        req.body.Employee_ID,
        req.body.Name,
        req.body.Department,
        req.body.YearsOfExperience,
        req.body.Skills
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    });
});

app.put('/employee/updateemp/:ID', (req, res) => {    
    const sql = "UPDATE employee SET Name = ?, Email = ?, Age = ?, Salary = ? WHERE ID = ?";    
    const values = [        
        req.body.Name,        
        req.body.Email,
        req.body.Age,
        req.body.Salary,
        req.params.ID   
    ]        
    db.query(sql, values, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });
});

app.put('/team/updateteam/:Employee_ID', (req, res) => {    
    const sql ="UPDATE team SET Team_ID = ?, Name = ?, Department = ?, YearsOfExperience = ?, Skills = ? WHERE Employee_ID = ?";    
    const values = [        
        req.body.Team_ID,
        req.body.Name,
        req.body.Department,
        req.body.YearsOfExperience,
        req.body.Skills,
        req.params.Employee_ID   
    ]             
    db.query(sql, values, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });
});

app.put('/client/updatecli/:ID', (req, res) => {    
    const sql = "UPDATE client SET Name = ?, Email = ?, Age = ? WHERE ID = ?";    
    const values = [        
        req.body.Name,        
        req.body.Email,
        req.body.Age,
        req.params.ID   
    ]        
    db.query(sql, values, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });
});


app.delete('/employee/:id', (req, res) => { 
    const id = req.params.id;    
    const sql = "DELETE FROM employee WHERE ID = ?";    
    db.query(sql, [id], (err, data) => {        
        if(err)  return res.json("error");   
        return res.json(data);    
    });
});

app.delete('/team/:Employee_ID', (req, res) => { 
    const id = req.params.Employee_ID;    
    const sql = "DELETE FROM team WHERE Employee_ID = ?";    
    db.query(sql, [id], (err, data) => {        
        if(err)  return res.json("error");   
        return res.json(data);    
    });
});

app.listen(8081, ()=> {
    console.log("listening");
})