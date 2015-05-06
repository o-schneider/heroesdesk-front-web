"use strict";

var watchify = require("watchify");
var notifier = require("node-notifier");
var childProcess = require('child_process')

var params = require('./params');
var server = require("./server");
var build = require("./build");

var failed = false;
var okIcon = __dirname + "/icons/ok.png";
var errorIcon = __dirname + "/icons/error.png";

var browserify = build.init(function (err) {
  failed = true;
  console.error("Error : ", err.message);
  notifier.notify({
    "title": "Babel build failed",
    "message": err.message,
    icon: errorIcon
  });
}, function () {
  if (failed) {
    console.log("back to normal");
    failed = false;
    notifier.notify({
      "title": "Babel build back to normal",
      "message": "No more errors",
      icon: okIcon
    });
  }
});

watchify(browserify.browserify)
  .on("log", function (msg) {
    console.log(msg);
  }).on("update", function () {
    console.log("File changed. Rebundling !");
    browserify.build();
  });

browserify.build();
server.hdStart();
