var express = require('express');
var less = require('less-middleware');
var params = require("./params");

var start = function (port, staticServedPath, fn) {
  console.log("Starting server");
  var app = express();

  app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
  });

  app.use('/', express.static(staticServedPath));

  app.listen(port, function () {
    console.log("Server started on port", port);
    if (fn !== undefined) fn();
  });
};

module.exports = {
  start: start,
  hdStart: function () {
    start(8080, params.WEB_APP_PATH)
  }
};



