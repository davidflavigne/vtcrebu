var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var vtc = require('./routes/vtc');
var app = express();

var dbName = 'vtcrebu';
var connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString);

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', vtc);

app.set('port', process.env.PORT || 8765);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;