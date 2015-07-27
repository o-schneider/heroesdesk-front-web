'use strict';

import MessageBus from '../message/MessageBus';
import Command from './Command';

export default class CommandBus extends MessageBus {

  checkPublish(event) {
    super.checkPublish(event);
    if (!(event instanceof Command )) {
      throw "Publish works only on commands";
    }
  }

}
