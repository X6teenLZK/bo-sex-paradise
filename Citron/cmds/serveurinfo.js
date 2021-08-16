const Discord = require('discord.js')

module.exports.run = async(bot,message,args) =>{

    let ServerEmbed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
    .addField('Nom du serveur', `${message.guild.name}`)
    .addField('Propriétaire', message.guild.owner)
    .addField('Nombre de membre', message.guild.memberCount)
    .addField('Nombre de role', message.guild.roles.cache.size)
    .setFooter('Sex Paradise')

    message.channel.send(ServerEmbed)
}

module.exports.config = {
    name: 'info-serveur'
}






