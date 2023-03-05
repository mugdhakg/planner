const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: "root@123", 
  database: 'planner-journal'
});

//Getting contents of events table.
app.get("/load", (req, res) =>{
  connection.query("SELECT * FROM `planner-journal`.events", function(err, result, fields){
    if (err) throw err;
    console.log(JSON.stringify(result));
    res.send(result);
  });
});

//Adding new events.
app.post("/newEvent", (req, res) => {
  const Slno = req.body.Slno;
  console.log("show"+JSON.stringify(req.body));
  const Name = req.body.Name;
  const date = req.body.date;
  const time = req.body.time;

  connection.query(
    "INSERT INTO `planner-journal`.events (event_id, event_name, event_date, event_time) VALUES (?,?,?,?)", [Slno, Name, date, time], (err, result) => {
      console.log(err);
    }
  )
});

//Registering a new user. Posting data into database.
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  connection.query(
    "INSERT INTO `planner-journal`.users (username, password) VALUES (?,?)", [username, password], (err, result) => {
      console.log(err);
    }
  );
});



//Validating user credentials by comparing with stored credentials.
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  connection.query(
    "SELECT * FROM `planner-journal`.users WHERE username = ? AND password = ?", [username, password], (err, result) => {
      if(err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        console.log(result)
        res.send(result);
      }
      else {
        res.send({ message: "Wrong username/password." });
      }
    }
  );
});



app.listen(5000, (err) => {
  if(err) throw err;
  console.log(`Server running on port 5000`);
});
