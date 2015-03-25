var fs = require("fs");
var browserify = require("browserify");
var watchify = require("watchify");
var babelify = require("babelify");

var b = browserify({cache: {}, packageCache: {}, debug: true})
  .transform(babelify)
  .add("./www/app/main.js");
var distPath = __dirname + '/www/dist';

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