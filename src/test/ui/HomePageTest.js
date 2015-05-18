"use strict";

const HttpServer = require("../../server/HttpServer");
const params = require("../../server/params");

const Browser = require('zombie');

var port = 3002;

describe('Home page', function () {

  Browser.localhost('localhost', port);
  Browser.userAgent = "Khrome";

  const server = new HttpServer(port, params.WEB_APP_PATH, false);
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