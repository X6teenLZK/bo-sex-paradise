const Discord = require("discord.js");
const fs = require('fs');
const bot = new Discord.Client();

const config = new require("./db/config.json"); 


bot.commands = new Discord.Collection();

fs.readdir('./cmds/.', (err, files) => {
    if(err) console.log(err)
    let jsfile = files.filter(f => f.split('.').pop() === 'js')
    if(jsfile.length <= 0) {
        console.log('[HANDLER]: Aucune commande trouvé')
    }

    jsfile.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`[HANDLER]: ${f} ok`)
        bot.commands.set(props.config.name, props)
    })
})

bot.on("ready", async () => {

    console.log(`${bot.user.username}: est connecté`)

    let statuses = [
        `${bot.guilds.cache.size} serveurs`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"})
    })

})


bot.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(command.slice(prefix.length))
    if(commandFile) commandFile.run(bot, message, args)


})












































bot.login(config.token)