'use strict';

var uuid = require('uuid');

module.exports = {
  generate: function() {
    var unordered = uuid.v1();
    return unordered.substr(14, 4) + unordered.substr(9, 4) + unordered.substr(0, 8) + unordered.substr(19, 4) + unordered.substr(24, unordered.length);
  },

  toBinary16: function(orderedUuid) {
    return new Buffer(orderedUuid, 'hex');
  },

  fromBinary16: function(binaryOrderedUuid) {
    return binaryOrderedUuid.toString('hex');
  }
};
