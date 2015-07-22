'use strict';

import {EventEmitter} from 'events';
import Event from './Event';

let eventEmitter = null;

class EventBus {
  constructor() {
    if (!eventEmitter) {
      eventEmitter = new EventEmitter();
    }
  }

  publish(event) {
    if (!(event instanceof Event )) {
      throw "Publish works only on events";
    }
    eventEmitter.emit(event.type, event);
    return;
  }

  subscribe(eventType, callback) {
    eventEmitter.on(eventType, callback);
    return;
  }
}
export const eventBus = new EventBus();
