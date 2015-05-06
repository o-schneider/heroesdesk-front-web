"use strict";

const server = require("../../../server/server");
const params = require("../../../server/params");

const Browser = require('zombie');

var port = 3002;

describe('Home page', function () {

  Browser.localhost('localhost', port);
  Browser.userAgent = "Khrome";

  const browser = new Browser();

  before(function (done) {
    server.start(port, params.WEB_APP_PATH, function () {
      browser.visit('/', done);
    });
  });

  it('should be the desk page', function () {
    browser.assert.text('.active', 'Desk');
  });
});