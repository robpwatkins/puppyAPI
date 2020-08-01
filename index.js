const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: '104.154.50.119',
  user: 'root',
  password: 'puppyAPI123$',
  database: 'puppy_api_db'
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
    console.log('heyoo');
  })
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

app.post('/pups', (req, res) => {
  const newPup = { 
    name: req.body.name,
    img_url: req.body.img_url
   }
  pool.query('INSERT INTO pups SET ?', newPup, (err, res) => {
    if (err) throw err;
  })
})