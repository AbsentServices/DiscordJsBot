const discord = require('discord.js');

exports.run = async (client, message, args) => {

        if(!args[0]) return message.channel.send('Use: !suggest <suggestion>');
        //message.channel.send("@here")
        var Votacao = new discord.RichEmbed()
            .setTitle(`Suggestion created by ${message.author.username}`)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Add an reaction to vote')
            .setColor(0xBF00FF)
            .setDescription(args.join(" "))
            //.setDescription(args)

        let msg = await message.channel.send(Votacao)

        await msg.react('✅');
        await msg.react('❌');

        message.delete({timeout: 1000})

        if(!message.member.roles.find(r => r.name === 'BOT')) return
    }