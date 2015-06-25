"use strict";

import {CREATE_ISSUE} from '../issue/actions';

const initialState = [{
  name: 'Trial-1',
  id: 0
}];


export default function issues(state = initialState, action) {
  console.log("Here I'm");
  switch (action.type) {
    case CREATE_ISSUE:
      console.log("Congrats young dude for " + action.id);
        return [{
      id: action.id,
          name: "Trial-" + state.length
    }, ...state];
    default:
      return state;
  }
}