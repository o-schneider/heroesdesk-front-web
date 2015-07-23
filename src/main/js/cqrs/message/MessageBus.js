'use strict';

import Message from './Message';
import {EventEmitter} from 'events';

let messageEmitter = null;

const log = false;

export default class MessageBus {
  constructor() {
    if (!messageEmitter) {
      messageEmitter = new EventEmitter();
    }
  }

  publish(message) {
    this.checkPublish(message);
    if(log) console.log("publish type of '" + message.type + "' with payload '" + message.payload + "'");
    messageEmitter.emit(message.type, message);
    return;
  }

  subscribe(messageType, callback) {
    if(log) console.log("subscribe to type '" + messageType + "' by callback '" + callback + "'");
    this.checkSubscribe(messageType,callback);
    messageEmitter.on(messageType, callback);
    return;
  }

  checkSubscribe(messageType, callback) {
  }

  checkPublish(message){
    if (!(message instanceof Message )) {
      throw "Publish works only on instances of Message";
    }
  }
}
