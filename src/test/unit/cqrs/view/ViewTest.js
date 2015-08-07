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

  it("subscribe given event type", function () {
    class FakeEventBus extends EventBus {
      constructor(collector){
        super();
        this.collector = collector;
      }
      subscribe(messageType, callback){
        console.log("message type " + messageType + ", callback " + callback);
        this.collector.push({messageType,callback});
      }
    }
    const collector = new Array();
    const fakeEventBus = new FakeEventBus(collector);
    const listenedEventTypes = ["messageType"];
    new View(fakeEventBus,listenedEventTypes);
    assert.equal(1,collector.length);
  });
});

