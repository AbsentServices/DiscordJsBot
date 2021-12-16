const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv-flow').config();
/*
* Made file for back up, do not think we need it
* Remove it if its taking to much space up
*/
const config = {
    token: process.env.TOKEN,
    owner: process.env.OWNER, 
    //developer.process.env.DEVELOPER, /* Need to fix this so developer is displayed*/
    prefix: process.env.PREFIX
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(config.token);