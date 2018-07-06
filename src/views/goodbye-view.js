const { BotTextMessage, View } = require('botfuel-dialog');

class GoodbyeViewBot extends View {
  render() {
    return [
      new BotTextMessage('Bye!'),
    ];
  }
}

module.exports = GoodbyeViewBot;
