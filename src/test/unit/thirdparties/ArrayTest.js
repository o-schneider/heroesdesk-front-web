var assert = require("assert");

describe('JavaScript Array', function(){
  describe('#indexOf()', function(){
    it('returns -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })

  describe('can be pass with ...', function(){
    function first(...content){
      return content[0];
    }
    it('returns -1 when the value is not present', function(){
       assert.equal(1,first(1));
    })
  })
});
