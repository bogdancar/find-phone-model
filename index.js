'use strict'
var phoneList = require('./phone-list.js');

exports.findPhone = function(searchString) {
    return phoneList.filter(function(item) {
      for (var field in item) {
        if (item[field] === null || item[field] === undefined) {
          continue;
        }
        if (item[field].toString().toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
          return true;
        }
      }
      return false;
    }
    );
}