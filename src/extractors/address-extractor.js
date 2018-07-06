const { WsExtractor } = require('botfuel-dialog');

class AddressExtractor extends WsExtractor {}

AddressExtractor.params = {
  dimensions: ['city', 'location', 'address', 'streetType'],
};

module.exports = AddressExtractor;
