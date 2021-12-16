
const Discord = require('discord.js');
const client = new Discord.Client();
let xp = require("../xp.json")

exports.run = async (client, message, args) => {

    message.delete();

    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvlXp = curlvl * 300;
    let difference = nxtLvlXp - curxp

    let lvlEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(0x000CFF)
        .addField("Level", curlvl, true)
        .addField("XP", curxp, true)
        .setFooter(`${message.author.username}, you need ${difference} xp until level up.`, message.author.displayAvatarURL);

    message.channel.send(lvlEmbed)
}