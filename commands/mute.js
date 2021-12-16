const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    
    let mUser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));
    if(!mUser) return message.channel.send(`Sorry, ${message.author.username}, but I couldn\'t find that user!`);
    let mReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry, but you don\'t have permission to do that!");
    if(mUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry, but I can\'t mute that user!")
    
    let muteEmbed = new Discord.RichEmbed()
        .setDescription("Mute")
        .setColor(0xBF00FF)
        .addField("User muted:", `${mUser} User ID: ${mUser.id}`)
        .addField("Muted by:", `<@${message.author.id}> ID: ${message.author.id}`)
        .addField("Muted on channel:", `${message.channel}`)
        .addField("Time:", message.createdAt)
        .addField("Reason:", mReason);
    
    let muteChannel = message.guild.channels.find('name', 'log');
    if(!muteChannel) return message.channel.send("Sorry, but I couldn\'t find the log channel.")
    
    message.guild.member(mUser).addRoles("564909305615220738")
    .then(console.log(`The user ${mUser} got muted for ${mReason} by ${message.author}`))
    muteChannel.send(muteEmbed)
    
    return;
}