const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    {
        var permissao = new Discord.RichEmbed()
            .setTitle("Insufficient permissions")
            .addField("You don't have permission to execute this command.", "You need MANAGE_MESSAGES permissions for this command.")

        message.channel.send(permissao)
        .then(msg => msg.delete(5000))
        return
    }

    if(!args[0])
    {
        var erro = new Discord.RichEmbed()
            .setTitle("Wrong usage")
            .addField("**Use:**", "!purge <number of messages>")

        message.channel.send(erro)
        return
    }
    
        message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Purged ${args[0]} messages in this channel.`).then(msg => msg.delete(5000))
    })
}