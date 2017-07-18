'use strict'
var phoneList = require('./phone-list.js');

exports.findPhone = function (searchString) {
  var result = [];
  for (var item of phoneList) {
    for (var field of item) {
      if (field.toString().toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
        result.push({ 'Retail Branding': item[0], 'Marketing Name': item[1], 'Device': item[2], 'Model': item[3] });
        break;
      }
    }
  }
  return result;
}