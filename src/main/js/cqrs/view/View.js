'use strict';

import '../event/EventBus';
import {check} from '../../check/check';
import _ from 'lodash';

const log = false;

export default class View {

  constructor(eventBus, ...listenedEventTypesAndActions) {
    check.notNull({'eventBus': eventBus});
    check.true("listenedEventTypesAndActions should contain at least one type and action", function () {
      return listenedEventTypesAndActions != null && listenedEventTypesAndActions.length != 0;
    });

    const view = this;
    _.forEach(listenedEventTypesAndActions, (actionAndType) => {
      const type = actionAndType.type;
      const action = actionAndType.action;

      if (log) console.log('about to register type ' + type + " and action " + action);

      check.true("type and action both present", () => {
        return typeof type === "string" && action instanceof Function
      });

      eventBus.subscribe(type, (message)=> {
        console.log("view ? " + (view instanceof View) + ", counter ? " + view.counter) ;
        action.call(null, message,view);
      });
    });
  }

}