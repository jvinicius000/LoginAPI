'use strict';

var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

exports.validate = function (email) {
  if (!email) return false;

  if ((email.length > 256) || (!tester.test(email))) return false;

  var emailParts = email.split('@');
  var account = emailParts[0];
  var address = emailParts[1];
  
  if (account.length > 64) return false;

  var domainParts = address.split('.');
  let domainSome = domainParts.some(function (part) {
    return part.length > 63;
  });

  if (domainSome) return false;

  return true;
};