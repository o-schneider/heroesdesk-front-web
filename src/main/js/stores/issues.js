"use strict";

import {CREATE_ISSUE} from '../issue/Actions';

const initialState = [{
  name: 'Trial-1',
  id: 0
}];


export default function issues(state = initialState, action) {
  switch (action.type) {
    case CREATE_ISSUE:
        return [{
      id: action.id,
          name: "Trial-" + state.length
    }, ...state];
    default:
      return state;
  }
}