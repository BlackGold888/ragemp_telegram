const { Telegraf } = require('telegraf')

//TODO Add your bot token
const bot = new Telegraf("YOUR_BOT_TOKEN");
/**
 * RUN /chat_id for getting chat ID
 * @type {string}
 */
const CHAT_ID = 'YOUR_CHAT_ID';

bot.command('chat_id', (ctx) => ctx.reply(`${ctx.message.chat.id}`));
//Add your own commands
/**
 * example - /message text
 */
bot.command('message', (ctx) => {
    const data = ctx.message.text.split(' ');
    data.shift();
    mp.players.broadcast(`${data.join(' ')}`);
});

/**
 * command - /veh id name
 * example - /veh 0 club
 */
bot.command('veh', (ctx) =>{
    const data = ctx.message.text.split(' ');
    data.shift();
    const player = mp.players.at(parseInt(data[0]));
    mp.vehicles.new(mp.joaat(data[1]), player.position,
        {
            numberPlate: "ADMIN",
            color: [[255, 0, 0],[255,0,0]]
    });
})

mp.events.add('playerJoin', (player) => {
    bot.telegram.sendMessage(CHAT_ID, `Player with social ${player.socialClub} joined!`);
});

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

