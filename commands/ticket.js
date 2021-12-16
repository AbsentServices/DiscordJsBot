const discord = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args) => {

    const categoryId = "582752625116839946";
 
    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;
 
    var bool = false;

    message.guild.channels.forEach((channel) => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
 
            message.channel.send("I\'m sorry, but you already have another open ticket.");
 
            bool = true;
 
        }
 
    });

    if (bool == true) return;
 
    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Hello, " + message.author.username)
        .setFooter("You ticket channel has been created!");
 
    message.channel.send(embedCreateTicket);

    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => { 
 
        createdChan.setParent(categoryId).then((settedParent) => { 
 
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
 
            var embedParent = new discord.RichEmbed()
                .setTitle("Hello, " + message.author.username.toString())
                .setDescription("Enter you question here!");
 
            settedParent.send(embedParent);
        }).catch(err => {
            message.channel.send("I'm sorry, but something went wrong. Try again later.");
        });
 
    }).catch(err => {
        message.channel.send("I'm sorry, but something went wrong. Try again later.");
    });
}