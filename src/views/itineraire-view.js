const { PromptView, BotTextMessage } = require('botfuel-dialog');

class ItineraireView extends PromptView {
  render(userMessage, { matchedEntities }) {
    const knowncity = matchedEntities.city && matchedEntities.city.values[0].value;

    if (knowncity) {
      return [new BotTextMessage(`OK on va à ${knowncity}!`)];
    }
    return [new BotTextMessage('Mais où du coup?')];
  }
}
module.exports = ItineraireView;
