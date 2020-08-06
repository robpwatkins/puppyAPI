const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');
require('dotenv/config');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
});

app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(port, () => console.log(`Listening on port ${port}...`));

pool.getConnection(err => {
  if (err) throw err;
  console.log('Connected!');
});

app.use(express.json());

app.get('/ping', (req, res) => res.send('pong!'));

app.get('/pups', (req, res) => {
  pool.query('SELECT * FROM pups', (err, rows) => {
    if (err) throw err;
    res.set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : "*", 
      'Access-Control-Allow-Credentials' : true
    })
    res.json(rows);
  })
});

app.get('/pups/1', (req, res) => {
  pool.query('SELECT * FROM pups ORDER BY RAND() LIMIT 1;', (err, rows) => {
    if (err) throw err;
    res.set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : "*", 
      'Access-Control-Allow-Credentials' : true
    })
    res.json(rows);
  })
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

app.post('/pups', (req, res) => {
  const newPup = { 
    img_url: req.body.img_url,
    name: req.body.name,
    dob: req.body.dob,
    hometown: req.body.hometown,
    gender: req.body.gender,
    breed: req.body.breed,
    about: req.body.about
   }
  pool.query('INSERT INTO pups SET ?', newPup, (err, res) => {
    if (err) throw err;
  })
})