"use strict";

import Immutable from 'immutable';
import assert from 'assert';

class Parent extends Immutable.Record
({title: 'parent'})
{
}

class ChildWithFunction extends Parent {
  label() {
    return this.get('title');
  }
}

describe('Immutable Record', function () {
  describe('handle equals', function () {
    it('based on keys only', function () {
      assert(new Parent({title: "foo"}).equals(new Parent({title: "foo"})));
    });
  });

  describe('allows extension', function () {
    it('to add function', function () {
      assert.equal("foo", new ChildWithFunction({title: "foo"}).label());
    });
    it('preserving parent keys', function () {
      assert.equal("foo", new ChildWithFunction({title: "foo", b: 2}).get('title'));
    });
    it('ignoring new keys', function () {
      assert(new ChildWithFunction({title: "foo", b: 2}).get('b') === undefined);
    });
  });

});
