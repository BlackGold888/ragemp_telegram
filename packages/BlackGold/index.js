const { Telegraf } = require('telegraf')

//TODO Add your bot token
const bot = new Telegraf("YOUR_BOT_TOKEN");

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
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

