'use strict';

import Uuid from 'node-uuid';

// The Event class freezes all its attributes in the constructor: no other attribute can be added and current ones can have their value modified.
// Mind though that Object.freeze don't throw exception when trying to set a value, the new value is silently ignored. It throws a TypeError when trying to add new attributes.
//
// The type is mandatory.
//
// Event's subclasses must wrap their own attributes in the payload and define getters.
export class Event {

  constructor(type, payloadOrNull) {
    if(type === null){
      throw "Type is mandatory";
    }
    this.uuid = Uuid.v4();
    this.type = type;
    this.payload = payloadOrNull;
    Object.freeze(this);
  }
}