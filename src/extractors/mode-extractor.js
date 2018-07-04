const { CorpusExtractor, FileCorpus } = require('botfuel-dialog');

class DimensionNameExtractor extends CorpusExtractor {
  constructor() {
    super({
      dimension: 'dimension_name',
      corpus: new FileCorpus(`${__dirname}/../corpora/dimension_name.txt`),
      options: {
        caseSensitive: false,
        keepQuotes: false,
        keepDashes: false,
        keepAccents: false,
      },
    });
  }
}