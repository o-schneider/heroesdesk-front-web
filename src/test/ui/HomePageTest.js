const Browser = require('zombie');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
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