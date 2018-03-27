// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./config/db');

// App Variable
const app = express();

// Port
const port = 8000;

// Cors Middleware
app.use(cors());

// Body parsing using json and urlencoding
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Page');
});

app.listen(port, () => {
  console.log('works');
});

// Connect mongoose to db
const config = require('./config/db');
mongoose.connect(config.database);

// MongoClient.connect(db.url, (err, database) => {
//   if (err) return console.log(err);
  
//   require('./app/routes')(app, database);
//   app.listen(port, () => {
//     console.log("We are live on " + port);
//   });
// });