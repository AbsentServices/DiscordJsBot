const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    
    let bUser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(`I\'m sorry, ${message.author.username}, I couldn\'t find that user!`);
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don\'t have permission to do that!");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry, but I can\'t ban that user!")
    
    let banEmbed = new Discord.RichEmbed()
        .setDescription("Ban")
        .setColor(0xBF00FF)
        .addField("User banned:", `${bUser} User ID: ${bUser.id}`)
        .addField("Banned by:", `<@${message.author.id}> ID: ${message.author.id}`)
        .addField("Banned on the channel:", `${message.channel}`)
        .addField("Time:", message.createdAt)
        .addField("Reason:", bReason);
    
    let banChannel = message.guild.channels.find('name', 'log');
    if(!banChannel) return message.channel.send("Sorry, but I couldn\'t find the log channel.")
    
    message.guild.member(bUser).ban(bReason)
    banChannel.send(banEmbed)
    
    return;
}