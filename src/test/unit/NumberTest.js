"use strict";

import should from "should";

describe('Number', function(){
    it('fehfozeshould return -1 when the value is not present', function(){
      const user = {
        name: 'tj'
        , pets: ['tobi', 'loki', 'jane', 'bandit']
      };


      user.should.have.property('name', 'tj');
      user.should.have.property('pets').with.lengthOf(4);


// If the object was created with Object.create(null)
// then it doesn't inherit `Object.prototype`, so it will not have `.should` getter
// so you can do:
      should(user).have.property('name', 'tj');
      console.log("still in ?");
// also you can test in that way for null's
      should(null).not.be.ok;

  })
});

