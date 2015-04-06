"use strict";

var fs = require("fs");
var browserify = require("browserify");
var watchify = require("watchify");
var babelify = require("babelify");
var lessify = require("node-lessify");
var notifier = require("node-notifier");
var server = require("./server");
var params = require("./params");

var failed = false;

var okIcon = __dirname+"/icons/ok.png";
var errorIcon = __dirname+"/icons/error.png";

var b = browserify({cache: {}, packageCache: {}, debug: true})
  .transform(lessify)
  .transform(babelify.configure({ignore: /less/}))
  .add(params.SRC_JS_PATH + "/main.js");

var build = function () {
  b.bundle()
    .on("error", function (err) {
      failed = true;
      console.error("Error : ", err.message);
      notifier.notify({
        "title": "Babel build failed",
        "message": err.message,
        icon: errorIcon
      });
    })
    .pipe(fs.createWriteStream(params.WEB_APP_PATH + "/bundle.js"));
};

watchify(b)
  .on("log", function (msg) {
    console.log(msg);
  }).on("update", function () {
    console.log("File changed. Rebundling !");
    build();
  }).on("bytes", function(){
    if(failed) {
      console.log("back to normal");
      failed = false;
      notifier.notify({
        "title": "Babel build back to normal",
        "message" : "No more errors",
        icon: okIcon
      });
    }
  });

build();
server.start(8080);
