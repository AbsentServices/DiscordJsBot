const discord = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args) => {
 
    const categoryId = "582752625116839946"; 
 
    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
    
    } else {
 
        message.channel.send("Please, enter this command in the ticket channel.");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Hello, " + message.channel.name)
        .setDescription("Your ticket is marked as **complete**. If you want to reopen it, just enter !ticket again in the #help chat.")
        .setFooter("Ticket Closed.");

    var logChannel = message.guild.channels.find("name", "log");
    if (!logChannel) return message.channel.send("This channel does not exist.");
 
    logChannel.send(embedCloseTicket);
 
}