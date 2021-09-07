const Discord = require("discord.js");
const { token, Prefix, ChannelR, RoleHolder } = require('../../config.json');

module.exports.run = (client, message, args) => {
	let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username)
		.setDescription("This is the user's info")
		.setColor('#9B59B6')
		.addField('Full username', message.author.tag)
		.addField('ID', message.author.id)
		.addField('Created at', message.author.createdAt);
		if(ChannelR == undefined) {
			message.channel.send({embed: embed});
     		} else {
			client.channels.find(channel => channel.name === ChannelR).send({embed: embed});
     		}	
};

module.exports.help = {
	name: "userinfo",
	desc: "Show userinfo"
};
