const { MessageEmbed } = require('discord.js')
const { prefix } = require('../db/config.json')

module.exports.run = async (bot, message, args) => {
    
    console.log(args)
    if(args[0]) {
        let command = args [0];
        if(bot.command.has(command)) {
            command = bot.commands.get(command)
            let SHembed = new MessageEmbed()
            .setColor('#CC0303')
            .setAuthor('Sex Paradise', message.guild.iconURL({dynamic: true, size: 512}))
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true, size: 512}))
            .setDescription(`Le bot a comme préfix : \`${prefix}\`\n\n`)

    }}

    let cmdmember = `\`aide\` \`serveurinfo\` \`utilisateurinfo\`` 
    let cmdadmin = `Aucune commande d'admin à été créer`
    if(!args[0]) {
        message.delete()
        let embed = new MessageEmbed()
        .setAuthor(`Commande daide`, message.guild.iconURL({dynamic: true, size: 512}))
        .setColor('#CC0303')
        .setDescription(`${message.author.username} Va voir t'es MP!`)

        let Sembed = new MessageEmbed()
        .setColor('#CC0303')
        .setAuthor(`Sex Paradise`, message.guild.iconURL({dynamic: true, size: 512}))
        .setThumbnail(bot.user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`Voici toutes les commandes disponibles pour le bot \`${bot.user.username}\` \n Le préfix du bot : \`${prefix}\``)
        .addField('Commandes pour les membres :', cmdmember)
        .addField('Commandes pour les admins :', cmdadmin)
        .setFooter('Sex Paradise', bot.user.displayAvatarURL({dynamic: true, size: 512}))
        message.channel.send(embed)
        .then(m => m.delete({timeout: 5000}))
        message.author.send(Sembed)
    }


}

module.exports.config = {
    name: 'aide'
}
