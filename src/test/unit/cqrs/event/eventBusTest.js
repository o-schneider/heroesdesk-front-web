'use strict';

import Message from '../../../../main/js/cqrs/message/Message';
import {eventBus} from '../../../../main/js/cqrs/event/eventBus';
import Event from '../../../../main/js/cqrs/event/Event';
import assert from 'assert';
import {fakeEventListener} from './fakeEventListener';

describe('eventBus', function () {

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

  it('is the same across modules', function (done) {
    const fromType = "from";
    const toType = "to";
    const payload = "foo";
    eventBus.subscribe(toType, (e) => {
      assert(e.payload === payload);
      done();
    });
    fakeEventListener.echo(fromType, toType)
    eventBus.publish(new Event(fromType, payload));
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
