'use strict';

import MessageBus from '../message/MessageBus';
import Event from './Event';

export default class EventBus extends MessageBus {

  checkPublish(event) {
    super.checkPublish(event);
    if (!(event instanceof Event )) {
      throw "Publish works only on events";
    }
  }

}
