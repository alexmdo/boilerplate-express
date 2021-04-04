var express = require('express');
var app = express();

console.log('Hello World');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
  res.json(
    process.env.MESSAGE_STYLE === 'uppercase' ? 
      {'message': 'HELLO JSON'} :
      {'message': 'Hello json'} 
  );
});

module.exports = app;