'use strict';

import React from 'react';
import ReactRouterBootstrap from 'react-router-bootstrap';
import Uuid from 'node-uuid'

var {
  ButtonLink
  } = ReactRouterBootstrap;

export default React.createClass({
  render() {
    var uuid = Uuid.v4();
    return (
      <div>
        <ButtonLink to="issue" params={{issueId: uuid}} id="addButton">New</ButtonLink>

        <h1>In progress</h1>

        <h1>To qualify</h1>

        <h1>To do</h1>
      </div>
    );
  }
});
