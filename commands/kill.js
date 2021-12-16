const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    
    let killedUser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));
    if(!killedUser) return message.channel.send(`I\'m sorry, ${message.author.username}, but you need to target someone in this server.`);
    if(killedUser.id === message.author.id) return message.channel.send("I'm sorry, but you can't kill yourself. Please target someone else.")

    let killEmbed = new Discord.RichEmbed()
        .setDescription("Kill")
        .setColor(0xBF00FF)
        .addField("User killed:", `${killedUser}`)
        .addField("Killed by:", `<@${message.author.id}>`)
        .addField("Killed on channel:", `${message.channel}`)
        .addField("Time:", message.createdAt)

    message.channel.send(killEmbed)

    return;
}