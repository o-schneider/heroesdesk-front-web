"use strict";

export const CREATE_ISSUE = "createIssue";

export function createIssue(id){
  console.log("createIssue");
  return {
    type : CREATE_ISSUE,
    id
  }

}