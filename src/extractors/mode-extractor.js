const { WsExtractor } = require('botfuel-dialog');

class ModeExtractor extends WsExtractor {}

ModeExtractor.params = {
  dimensions: ['travel-mode'],
};

module.exports = ModeExtractor;