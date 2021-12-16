const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args) => {
    message.delete();

    message.channel.send(`Current latency is ${message.createdTimestamp - message.createdTimestamp}ms, while API's latency is ${Math.round(client.ping)}ms.`);
};