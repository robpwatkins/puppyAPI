const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'us-cdbr-east-02.cleardb.com',
  user: 'b4d90c8a948ffc',
  password: '2dc553d4',
  database: 'heroku_255650b15c9441b'
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  })
}


pool.getConnection(err => {
  if (err) throw err;
  console.log('Connected!');
});

app.use(express.json());

app.get('/ping', (req, res) => res.send('pong!'));

app.get('/pups', (req, res) => {
  pool.query('SELECT * FROM pups', (err, rows) => {
    if (err) throw err;
    res.send(rows);
  })
});

app.post('/pups', (req, res) => {
  const newPup = { 
    name: req.body.name,
    img_url: req.body.img_url
   }
  pool.query('INSERT INTO pups SET ?', newPup, (err, res) => {
    if (err) throw err;
  })
})