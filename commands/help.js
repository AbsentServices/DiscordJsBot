const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args) => {
    message.delete();

    message.channel.send(`Hello ${message.author.username}, sent you a DM with all information you need.`);

    var Help = new Discord.RichEmbed()
        .setTitle("Help")
        .setColor("RANDOM")
        .addField('Moderation:', "Ban\nKick\nMute\nSay\nReact\nPurge\nPing\nGoogle\nTicket\nCloseTicket\nHelp")
        .addField("Fun:", "Meme\nKill\nXP\nGif\n8Ball\ncoin")
        .setFooter('Thank you for using our help command')
        .setImage(message.author.avatarURL);

    message.author.send(Help);
};
