'use strict';

var logger = require('logentries-logformat')('suite-sdk');

var Contact = function(request) {
  this._request = request;
};

Contact.prototype = {

  create: function(customerId, payload, options) {
    logger.log('contact_create');
    return this._request.post(customerId, '/contact', payload, options);
  }

};

Contact.create = function(request) {
  return new Contact(request);
};

module.exports = Contact;
