var express = require('express');
var less = require('less-middleware');

var webAppPath = __dirname + '/www';

var app = express();

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(less(webAppPath));
//app.use('/dist/bundle.js', browserify('./www/app/main.js'));
app.use('/', express.static(webAppPath));

app.listen(8080, function () {
  console.log("server started on port 8080");
});
