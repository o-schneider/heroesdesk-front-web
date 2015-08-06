'use strict';

import View from '../../../../main/js/cqrs/view/View';
import EventBus from '../../../../main/js/cqrs/event/EventBus';
import assert from 'assert';


describe('View', function () {
  it("throws when no event bus provided", function () {
    assert.throws(function () {
      new View();
    });
  });

  it("throws when no listened event types provided", function () {
    assert.throws(function () {
      new View();
    });
  });
});

