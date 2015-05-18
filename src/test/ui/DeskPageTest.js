"use strict";

const HttpServer = require("../../server/HttpServer");
const params = require("../../server/params");

const Browser = require('zombie');

var port = 30221;
/*
describe('Desk page', function () {

  Browser.localhost('localhost', port);
  Browser.userAgent = "Khrome";

  const server = new HttpServer(port, params.WEB_APP_PATH);
  const browser = new Browser();

  before(function (done) {
    server.start(function () {
      browser.visit('/#/desk', done);
    });
  });

  it('is accessible through /#/desk', function () {
    browser.assert.text('.active', 'Desk');
  });


   before(function (done) {
     browser.visit('/desk', done);
   });

   it('is accessible through /desk', function () {
     browser.assert.text('.active', 'Desk');
   });


});*/