"use strict";

const HttpServer = require("../../server/HttpServer");
const params = require("../../server/params");

const Browser = require('zombie');

describe('Home page', function () {

  Browser.localhost('localhost', params.UI_TEST_PORT);
  Browser.userAgent = "Khrome";

  const server = new HttpServer(params.UI_TEST_PORT, params.WEB_APP_PATH, false);
  const browser = new Browser();

  before(function (done) {
    server.start(function () {
      browser.visit('/', done);
    });
  });

  it('should be the desk page', function () {
    browser.assert.text('.active', 'Desk');
  });

  after(function (){
    server.stop();
  });

});