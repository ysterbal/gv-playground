var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var errorhandler = require('errorhandler')

var app = express();

// all environments
app.set('port', process.env.PORT || 5000);
app.use(morgan('combined'));
app.use(methodOverride('X-HTTP-Method-Override'));

// development only
if ('development' == app.get('env')) {
  app.use(errorhandler());
}

app.post('/whatismyip',routes.whatIsMyIP);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Server listening on port ' + app.get('port'));
});