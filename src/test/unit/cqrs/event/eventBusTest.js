'use strict';

import {Message} from 'cqrs4js';
import {EventBus} from 'cqrs4js';
import {Event} from 'cqrs4js';
import assert from 'assert';

describe('eventBus', function () {
  console.log(Message, EventBus, Event);
  const eventBus = new EventBus();

  it("publishes  events", function () {
    eventBus.publish(new Event("type"));
  });

  it("publishes  event's subclass", function () {
    class EventSubClass extends Event {
      constructor() {
        super("type", null);
      }
    }
    eventBus.publish(new EventSubClass());
  });

  it("throws when publishing  Message", function () {
    assert.throws(function () {
      eventBus.publish(new Message("tt"));
    });
  });

  it("throws when publishing  null", function () {
    assert.throws(function () {
      eventBus.publish(null);
    });
  });

  it('allows publishing even if no subscriber', function () {
    eventBus.publish(new Event("dd"));
  });

  it('allows multiple subscribers', function (done) {
    let called = 0;
    eventBus.subscribe("type", () => {
      called++;
      if( called === 2){
        done();
      }
    });
    eventBus.subscribe("type", () => {
      called++;
      if( called === 2){
        done();
      }
    });
    eventBus.publish(new Event("type"));
  });
});
