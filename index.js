const TelegramBot = require('node-telegram-bot-api');
const dialogflow = require('./dialogflow');
const youtube = require('./youtube');
const token = '1157942958:AAHRZYsGNFjKTLqmOUOHNTEUOnikUP-Io60';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async function (msg) {
    const chatId = msg.chat.id;
    if (msg.text) {
        const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);
        let responseText = dfResponse.text;
        if (dfResponse.intent === 'Treino específico') {
            responseText = await youtube.searchVideoURL(responseText, dfResponse.fields.corpo.stringValue).then(result => result);
            responseText.forEach(async function(msg){
                await bot.sendMessage(chatId, msg);
            });
        }else{
            bot.sendMessage(chatId, responseText);
        }
    }
});