const Discord = require('discord.js');
const path = require('path');
const fs = require('fs');
const { token, Prefix, ChannelR, RoleHolder } = require('../../config.json');



module.exports.run = (client, message, args) => {
const appdata = process.env.APPDATA;
	if (fs.existsSync(appdata + "/DisTwin/Currency/BankAccount.json")){
		if(!args[0] == ""){
			var user = message.mentions.users.first().username;
		} else {
			var user = message.author.username;
		}
	        fs.readFile(appdata + "/DisTwin/Currency/BankAccount.json", 'utf8', (err, jsonString) => {
			try {
				const jsonObj = JSON.parse(jsonString);
				jsonObj["Accounts"].forEach(item =>
				{
					if(item.Discord == user)
					{
						if(ChannelR == undefined) {
							message.channel.send(item.Name + ': ' + item.price);
						} else {
							client.channels.find(channel => channel.name === ChannelR).send(item.Name + ': ' + item.price);
						}
					}
				});
			} catch(err) {
				if(ChannelR == undefined) {
					message.channel.send('Couldnt grab currency for user');
				} else {
					client.channels.find(channel => channel.name === ChannelR).send('Couldnt grab currency for user');
				}
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
name: 'cur',
desc: 'Display current currency for user.'
};
