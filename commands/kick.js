const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    
    let kUser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(`I\'m sorry, ${message.author.username}, but I couldn\'t find that user!`);
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("I\'m sorry, but you don\'t have permission to do that!");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("I\'m sorry, but I can\'t kick that user!")

    let kickEmbed = new Discord.RichEmbed()
        .setDescription("Kick")
        .setColor(0xBF00FF)
        .addField("User kicked:", `${kUser} User ID: ${kUser.id}`)
        .addField("Kicked by:", `<@${message.author.id}> ID: ${message.author.id}`)
        .addField("Kicked on channel:", `${message.channel}`)
        .addField("Time:", message.createdAt)
        .addField("Reason:", kReason)

    let kickChannel = message.guild.channels.find('name', 'log');
    if(!kickChannel) return message.channel.send("Sorry, but I couldn\'t find the log channel.")

    message.guild.member(kUser).kick(kReason)
    kickChannel.send(kickEmbed)

    return;
}