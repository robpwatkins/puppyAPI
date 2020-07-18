const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'soberkeeperuser',
  password: 'Sober123$',
  database: 'testerDB'
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

connection.connect(err => {
  if (err) throw err;
  console.log('Connected!');
});

app.use(express.json());

app.get('/ping', (req, res) => res.send('pong!'));

app.get('/testPosts/outward', (req, res) => {
  connection.query('SELECT * FROM testPosts', (err, rows) => {
    if (err) throw err;
    res.send(rows);
  })
});

app.post('/testPups', (req, res) => {
  const newPup = { 
    name: req.body.name,
    imgUrl: req.body.imgUrl
   }
  connection.query('INSERT INTO testPups SET ?', newPup, (err, res) => {
    if (err) throw err;
  })
})