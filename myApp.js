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

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json(
    {
      time: req.time
    }
  );
});

app.get('/:word/echo', (req, res) => {
  res.json(
    {
      echo: req.params.word
    }
  );
});

app.get('/name', (req, res) => {
  const { first, last } = req.query;
  res.json(
    {
      name: `${first} ${last}`
    }
  );
});

module.exports = app;