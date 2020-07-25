const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'us-cdbr-east-02.cleardb.com',
  user: 'b716d56107f6c3',
  password: '31ce2aeb',
  database: 'testPup'
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

connection.connect(err => {
  if (err) throw err;
  console.log('Connected!');
});

app.use(express.json());

app.get('/ping', (req, res) => res.send('pong!'));

app.get('/pups', (req, res) => {
  connection.query('SELECT * FROM pups', (err, rows) => {
    if (err) throw err;
    res.send(rows);
  })
});

app.post('/pups', (req, res) => {
  const newPup = { 
    name: req.body.name,
    img_url: req.body.imgUrl
   }
  connection.query('INSERT INTO pups SET ?', newPup, (err, res) => {
    if (err) throw err;
  })
})