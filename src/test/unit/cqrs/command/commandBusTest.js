'use strict';

import CommandBus from '../../../../main/js/cqrs/command/CommandBus';
import assert from 'assert';

describe('commandBus', function () {

  it("throws when publishing a command for which no subscriber is present", function () {
    const commandBus = new CommandBus();
    assert.throws(function () {
      commandBus.publish(new Command("type"));
    });
  });
});