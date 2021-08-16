const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login("ODc2OTA0MDc0MTQ1MDY3MTI5.YRq2jw.A-niSsj4AM3cXEAaL36RmroFHF4");