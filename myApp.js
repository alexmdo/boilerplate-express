var express = require('express');
var app = express();

console.log('Hello World');

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
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