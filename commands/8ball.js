const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    
    if(!args[2]) return message.reply("Please, ask a full question!");
    let replies = ["Yes.", 
    "No.", 
    "I don't know.", 
    "Maybe.",
    "try again"
];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("BLACK")
    .addField("Question:", question)
    .addField("Answer:", replies[result]);

    message.channel.send(ballembed);
};
