'use strict';

import _ from "lodash";

class Check {
  notNull(parameters) {
    if(parameters == null){
      throw new Error("Null object parameters given ");
    }
    if (_.some(parameters, function (n) {
        return n == null;
      })) {
      var result = _.reduce(parameters, function (result, n, key) {
        const currentValue = key + "/" + n;
        if (typeof(result) === 'string') {
          result = result + ", " + currentValue;
        } else {
          result = "parameter key/values: " + currentValue;
        }
        return result;
      }, {});
      throw new Error("One of more null parameters in " + result);
    }
  }
}

export const check = new Check();