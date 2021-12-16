const Discord = require('discord.js');
const commando = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const prefix = "!";
const db = require('quick.db');
let xp = require("./xp.json");
//require('dotenv-flow').config();
//Run Bot >> node Discordbot.js
client.on('ready', () => {
    console.log("Discordbot is now online!");

client.user.setActivity("!help / Under Development");
});

client.on('message', message => {

    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();


    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    try {

        delete require.cache[require.resolve(`./commands/${cmd}.js`)];


        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args);

    } catch (e) {
        console.log(e.stack);
    }

});


client.on('message', message => {

let xpAdd = Math.floor(Math.random() * 7) + 8;
console.log(xpAdd);

if(!xp[message.author.id])
{
    xp[message.author.id] = {
        xp: 0,
        level: 1
    };
}

let nxtLvl = xp[message.author.id].level * 300;

let curxp = xp[message.author.id].xp;

let curlvl = xp[message.author.id].level;
xp[message.author.id].xp = curxp + xpAdd;

if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
        .setTitle("Level up!")
        .setColor(0x000CFF)
        .addField(`Congrats ${message.author.username}!`, `You are now level ${curlvl + 1}`);

    message.channel.send(lvlup);

}
fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err);
});
});


/*client.on('guildMemberAdd', (guildMember) => {
    var BemVindo = new Discord.RichEmbed()
        .setTitle("WELCOME")
        .setThumbnail(guildMember.user.avatarURL)
        .setDescription(`Hello, ` + guildMember.user.username + `. Welcome to the best server ever! check the #server-rules`)
    guildMember.guild.channels.find(c => c.name === 'chat').sendEmbed(BemVindo)
});*/

/*client.on('guildMemberRemove', (guildMember) => {
    var Adeus = new Discord.RichEmbed()
        .setTitle("LEAVE")
        .setThumbnail(guildMember.user.avatarURL)
        .setDescription('Unfortunately, ' + guildMember.user.username + '. just left us.')
    guildMember.guild.channels.find(c => c.name === 'chat').sendEmbed(Adeus)
});*/


client.login(config.token);