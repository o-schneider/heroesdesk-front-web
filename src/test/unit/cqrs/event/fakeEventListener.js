'use strict';

import {eventBus} from '../../../../main/js/cqrs/event/eventBus';
import Event from '../../../../main/js/cqrs/event/Event';


class FakeEventListener {

  echo(fromType, toType) {
    eventBus.subscribe(fromType, (e) => {
      eventBus.publish(new Event(toType, e.payload));
    })
  }

}
export const fakeEventListener = new FakeEventListener();