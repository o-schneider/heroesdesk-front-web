'use strict';

import '../event/EventBus';
import {check} from '../../check/check';

export default class View {
  constructor(eventBus, listenedEventTypes) {
    check.notNull({'eventBus' : eventBus, 'listenedEventTypes' : listenedEventTypes});
  }

}