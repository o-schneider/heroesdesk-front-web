'use strict';

import MessageBus from '../message/MessageBus';
import Command from './Command';

class CommandBus extends MessageBus {

  checkPublish(event) {
    super.checkPublish(event);
    if (!(event instanceof Command )) {
      throw "Publish works only on commands";
    }
  }

}
export const commandBus = new CommandBus();
