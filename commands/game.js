const Discord = require('discord.js');

export function run(client, message, args) {
    if (!message.author.id === '161912712773763072') return message.reply('You do not have the permission to use this command!');
    if(!args[0]) return;
    if(args[0] === 'game') return message.reply('Please tell me a game to play!');
    if(args[0] === 'default') {
      args = `/help | Protecting ${client.guilds.size} servers!`;
      message.reply(`I am now playing \`${args}\`.`);
      client.user.setPresence({ game: { name: args, type: 1 } });
    }else{
     args = args.join(" ");
     message.reply(`I am now playing \`${args}\`.`);
     client.user.setPresence({ game: { name: args, type: 0 } });
    }
  }
  
export const conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
export const help = {
    name: 'game',
    description: 'Sets the bot\'s playing status.',
    usage: 'setgame <playing status>'
  };