"use strict";

export const CREATE_ISSUE = "createIssue";

export function createIssue(id){
  return {
    type : CREATE_ISSUE,
    id
  }

}