const Discord = require('discord.js');
const path = require('path');
const fs = require('fs');



module.exports.run = (client, message, args) => {
const appdata = process.env.APPDATA;
	if (fs.existsSync(appdata + "/DisTwin/Currency/BankAccount.json")){
	        fs.readFile(appdata + "/DisTwin/Currency/BankAccount.json", 'utf8', (err, jsonString) => {
			try {
				const jsonObj = JSON.parse(jsonString);
				jsonObj["Accounts"].sort((a,b) => { 
					return b.price - a.price;
				});
				var i = 0;
				let embed = new Discord.RichEmbed()
					.setColor(0x0079a8)
					.setTitle("~Top 10~")
				jsonObj["Accounts"].forEach(item =>
				{
					i++
					if(i < 11)
					{
						embed.addField(i + ". " + item.Name, "Currency: " + item.price)
					}
				});
				if(ChannelR == undefined) {
					message.channel.send({embed: embed});
				} else {
					client.channels.find(channel => channel.name === ChannelR).send({embed: embed});
				}
			} catch(err) {
				if(ChannelR == undefined) {
					message.channel.send('Couldnt grab currency for user');
				} else {
					client.channels.find(channel => channel.name === ChannelR).send('Couldnt grab currency for user');
				};
			}
		});
	} else {
		if(ChannelR == undefined) {
			message.channel.send('Couldnt grab currency for user');
		} else {
			client.channels.find(channel => channel.name === ChannelR).send('Couldnt grab currency for user');
		}
	}
};



module.exports.help = {
name: 'curtop',
desc: 'Display current currency for user.'
};