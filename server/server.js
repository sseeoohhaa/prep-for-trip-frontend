const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) =>{
    res.send("Message: Server Connected")
})

// connection with mysql
const mysql = require('mysql');

const db = mysql.createPool({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'Mysql password',
    database : 'Database name'
});

db.getConnection((err => {
    if(err) {
        console.log("DB Connection Failed:", err);
    } else {
        console.log("DB Connection Succeed");
    }
}))

// api: get all city data
app.get("/api/city", (req, res) => {
    db.query("select * from city;", (err, data) => {
        if(err) {
            console.log("Get city list API Failed");
        } else {
            console.log("Get city list API Succeed");
            res.send(data);
        }
    });
});

// api: get specific city data by city name
app.get("/api/city/name", (req, res) => {
    db.query("select * from city where english_name=" + req.name + ";", (err, data) => {
        if(err) {
            console.log("Get specific city API Failed");
        } else {
            console.log("Get specific city API Succeed");
            res.send(data);
        }
    });
});

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port} now`);
})