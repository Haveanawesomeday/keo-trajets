const { CorpusExtractor, FileCorpus } = require('botfuel-dialog');

class TravelModeExtractor extends CorpusExtractor {
  constructor() {
    super({
      dimension: 'travel-mode',
      corpus: new FileCorpus(`${__dirname}/../corpora/travel-mode.txt`),
      options: {
        caseSensitive: false,
        keepQuotes: false,
        keepDashes: false,
        keepAccents: false,
      },
    });
  }
}

module.exports = TravelModeExtractor;