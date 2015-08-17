var assert = require("assert");

describe('JavaScript Array', function () {
  describe('#indexOf()', function () {
    it('returns -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(0));
    })
  });
  function first(...content) {
    return content[0];
  }
  it('can be pass with ...', function () {
    assert.equal(1,first(1));
  })

  it('returns size when length is used', function () {
    assert.equal(3,  [1, 2, 3].length);
  })
})
;
