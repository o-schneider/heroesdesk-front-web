"use strict";

var build = require("./build");

var browserify = build.init(function (err) {
  console.error("Build failed : ", err.message);
}, function () {
  console.log("Build finished successfully");
});

browserify.build();