const Browser = require('zombie');

Browser.localhost('localhost', 8080);

describe('User visits home page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('should see Desk page active', function() {


    it('should see welcome page', function() {
      browser.assert.text('.active', 'Desk');
    });
  });

});