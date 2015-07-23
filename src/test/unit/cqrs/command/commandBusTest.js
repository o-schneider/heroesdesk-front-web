'use strict';

import {commandBus} from '../../../../main/js/cqrs/command/commandBus';
import assert from 'assert';

describe('commandBus', function () {

  it("throws when publishing a command for which no subscriber is present", function () {
    assert.throws(function () {
      commandBus.publish(new Command("type"));
    });
  });
});