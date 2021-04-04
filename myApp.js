var express = require('express');
var app = express();

console.log('Hello World');

const router = express.Router();
router.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

module.exports = router;