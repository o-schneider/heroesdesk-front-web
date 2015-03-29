var express = require('express');
var less = require('less-middleware');
var params = require("./params");

module.exports.start = function(port) {
  console.log("Starting server");
  var app = express();

  app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
  });

  app.use(less(params.WEB_APP_PATH));
  app.use('/', express.static(params.WEB_APP_PATH));

  app.listen(port, function () {
    console.log("Server started on port", port);
  });
};



