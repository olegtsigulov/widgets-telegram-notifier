const TelegramBot = require('node-telegram-bot-api');
const config = require('config');

class Bot {
  constructor() {
    this.bot = new TelegramBot(process.env.BOT_TOKEN || config.TELEGRAM_BOT_TOKEN, {
      polling: {
        interval: 300,
        autoStart: true,
        params: {
          timeout: 10,
        },
      },
    });
    this.bot.onText(/\/start/, async (msg) => {
      const chatId = msg.chat.id;
      return this.bot.sendMessage(chatId, 'Hello you');
    });
  }
}

const MaxiWidgetsBot = new Bot();

module.exports = MaxiWidgetsBot;
