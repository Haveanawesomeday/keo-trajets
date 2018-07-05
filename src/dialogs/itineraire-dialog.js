const { PromptDialog } = require('botfuel-dialog');

class Itineraire extends PromptDialog {}

Itineraire.params = {
  namespace: 'itineraire',
  entities: {
    city: {
      dim: 'city',
    },
  },
};

module.exports = Itineraire;
