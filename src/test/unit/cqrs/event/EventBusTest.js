'use strict';

import Event from '../../../../main/js/cqrs/event/Event';
import {eventBus} from '../../../../main/js/cqrs/event/EventBus';
import assert from 'assert';
import {EventEmitter} from 'events';


describe('EventBus publishing', function () {
  it("handles events", function () {
    eventBus.publish(new Event("type", "payload"));
  });

  it("handles event's subclass", function () {

    class WorkingEvent extends Event {
      constructor() {
        super("workingEvent", "staticPayload");
      }
    }

    eventBus.publish(new WorkingEvent());
  });

  it("throws Error if something else then event provided", function () {
    assert.throws(function () {
      eventBus.publish(new Object());
    });
  });

  it("effectively emits events", function (done) {
    const eventType = "eventType";
    eventBus.subscribe(eventType, () => {
      done();
    });
    eventBus.publish(new Event(eventType, "payload"));
  });

});

