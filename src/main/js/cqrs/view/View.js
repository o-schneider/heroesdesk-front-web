'use strict';

import '../event/EventBus';
import {check} from '../../check/check';
import _ from 'lodash';

export default class View {
  constructor(eventBus, listenedEventTypes) {
    check.notNull({'eventBus': eventBus, 'listenedEventTypes': listenedEventTypes});
    this.eventBus = eventBus;
    this.listenedEventTypes = listenedEventTypes;
    this.init();
  }

  init() {

    const eventBus = this.eventBus;
    _.forEach(this.listenedEventTypes, function (eventType) {
      eventBus.subscribe(eventType, function (message) {
          on(eventType, message);
      });

    });
  }

  on(eventType, message){

  }
}