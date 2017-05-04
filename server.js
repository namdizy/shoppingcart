/**
 * Created by Nnamdi on 5/2/2017.
 */
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const api = require('./server/routes/api');
const config = require('./server/api/config.json');
const fakeData = require('./server/api/data');

//=====================================================================
const dbURL = config.dbURL;
mongoose.connect(dbURL);

//=========================================================================

fakeData.saveData();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function(){ console.log('API running on localhost: 3000')});
