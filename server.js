// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./config/db');
const config = require('./config/db');
const bucketlist = require('./controller/bucketlist');

// Connect mongoose to db
mongoose.connect(config.database);

// Port
const port = 8000;

// App Variable
const app = express();

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

app.use('/bucketlist', bucketlist);

// Listen
app.listen(port, () => {
  console.log('works');
});

// MongoClient.connect(db.url, (err, database) => {
//   if (err) return console.log(err);
  
//   require('./app/routes')(app, database);
//   app.listen(port, () => {
//     console.log("We are live on " + port);
//   });
// });