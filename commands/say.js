const Discord = require('discord.js');
  /*Change up the say command, Old code wasn't working*/
exports.run = (client, message, args) => {

    const response = args.join(' ');
    message.delete();
    message.channel.send(response);

};

exports.help = {
    name: 'say'
};
