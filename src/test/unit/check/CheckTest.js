'use strict';

import assert from 'assert';
import {check} from '../../../main/js/check/check';

describe('Check', function () {

  describe('parametersNotNull', function () {
    it("takes parameters names and values", function () {
        check.notNull({'a': 'aaa', 'b': 2 });
    });
    it("throws when given null object", function () {
      assert.throws(function () {
        check.notNull(null);
      });
    });
    it("throws on one null value", function () {
      assert.throws(function () {
        check.notNull({'a': null, 'b': 2 });
      });
    });
    it("throws on multiple null values", function () {
      assert.throws(function () {
        check.notNull({'a': 'Zzzz', 'b': 2 , c : null, d : "nff", e: null});
      });
    });
  });
});

