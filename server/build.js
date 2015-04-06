var fs = require("fs");
var babelify = require("babelify");
var lessify = require("node-lessify");
var params = require("./params");
var browserify = require("browserify");

module.exports.init = function (errorCb) {
  var b = browserify({cache: {}, packageCache: {}, debug: true})
    .transform(lessify)
    .transform(babelify.configure({ignore: /less/}))
    .add(params.SRC_JS_PATH + "/main.js");
  return {
    build: function () {
      b.bundle()
        .on("error", function (err) {
          if (errorCb !== undefined) {
            errorCb(err);
          }
        }).pipe(fs.createWriteStream(params.WEB_APP_PATH + "/bundle.js"));
    },
    browserify: b
  };
};