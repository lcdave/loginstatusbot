var fs = require('fs');
const token = process.env.TOKEN;
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/login/, (msg) => {
	bot.sendMessage(msg.chat.id, '❌❌❌❌' + msg.from.first_name + ' IS NOW LOGGED IN! ❌❌❌❌').then((m) => {
		bot.pinChatMessage(m.chat.id, m.message_id);
		console.log(m);
	});
});

bot.onText(/\/logout/, (msg) => {
	bot.sendMessage(msg.chat.id, '✅✅✅✅ NOBODY IS PLAYING RIGHT NOW ✅✅✅✅').then((m) => {
		bot.pinChatMessage(m.chat.id, m.message_id);
	});
});