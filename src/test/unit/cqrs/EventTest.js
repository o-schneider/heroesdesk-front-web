'use strict';

import Event from '../../../main/js/cqrs/Event';
import assert from 'assert';

describe('Event', function () {
  it("has an uuid", function () {
    assert(new Event("foo", "bar").uuid !== null);
  });
  it("throws Error if no type provided", function () {
    assert.throws(function () {
      new Event(null, "bar");
    });
  });
  describe('subclasses', function () {
    it("cannot add keys outside of Event's payload", function () {
      class BrokenEvent extends Event {
        constructor(bar, foo) {
          super(bar, foo);
          this.combination = bar + foo; // doesn't work, object of the test !!
        }
      }
      assert.throws(function () {
        new BrokenEvent("t", "oc");
      }, TypeError);
    });

    it("can provide payload", function () {
      class WorkingEvent extends Event {
        constructor(type, payload) {
          super(type, payload);
        }
      }
      const payload = "payload";
      assert.equal(payload, new WorkingEvent("WorkingEvent", payload).payload);
    });


    it("can define functions", function () {
      class EventWitgFunction extends Event {
        constructor(type, payload) {
          super(type, payload);
        }

        nicePayload() {
          return "nice" + payload;
        }
      }
      const payload = "payload";
      assert.equal("nice" + payload, new EventWitgFunction("WorkingEvent", payload).nicePayload());
    });
  });
});

