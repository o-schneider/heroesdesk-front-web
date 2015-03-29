var fs = require("fs");
var browserify = require("browserify");
var watchify = require("watchify");
var babelify = require("babelify");
var server = require("./server");
var params = require("./params");

var b = browserify({cache: {}, packageCache: {}, debug: true})
  .transform(babelify)
  .add(params.WEB_APP_PATH + "/app/main.js");

var distPath = params.WEB_APP_PATH + "/dist";

var build = function () {
  b.bundle()
    .on("error", function (err) {
      console.error("Error : ", err.message)
    })
    .pipe(fs.createWriteStream(distPath + "/bundle.js"));
};

watchify(b)
  .on("log", function (msg) {
    console.log(msg);
  }).on("update", function () {
    console.log("File changed. Rebundling !");
    build();
  });

build();
server.start(8080);
