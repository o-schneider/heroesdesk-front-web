'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import Uuid from 'node-uuid';
import * as IssueActions from '../issue/actions.js';

export default class Desk {

  render() {
    return (
      <Connector select={state => ({ issues: state.issues })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ issues, dispatch }) {
    const actions = bindActionCreators(IssueActions, dispatch);
    return (
      <div>
        <button onClick={() => {actions.createIssue(Uuid.v4());} }>CLICK MEEEEE</button>
        Number of issues {issues.length}
      </div>
    );
  }

}