const Discord = require('discord.js');
const path = require('path');
const fs = require('fs');
const { token, Prefix, ChannelR, RoleHolder } = require('../../config.json');

module.exports.run = (client, message, args) => {
const appdata = process.env.APPDATA;
if (fs.existsSync(appdata + '/DisTwin/Currency/BankAccount.json')){
fs.readFile(appdata + '/DisTwin/Currency/BankAccount.json', 'utf8', (err, jsonString) => {
try {
const jsonObj = JSON.parse(jsonString);
if(jsonObj['MoneyTree'].includes(message.author.username)){
jsonObj['Accounts'].forEach(item =>
{
if(item.Name == args[1])
{
item.Discord = message.mentions.users.first().username;
	if(ChannelR == undefined) {
		message.channel.send(message.mentions.users.first().username + ' successfully linked to ' + args[1]);
	} else {
		client.channels.find(channel => channel.name === ChannelR).send(message.mentions.users.first().username + ' successfully linked to ' + args[1]);
	}
fs.writeFileSync(appdata + '/DisTwin/Currency/BankAccount.json', JSON.stringify(jsonObj, null, 2));
}
});
} else {
	if(ChannelR == undefined) {
		message.channel.send('You dont have premission to perform this command!');
	} else {
		client.channels.find(channel => channel.name === ChannelR).send('You dont have premission to perform this command!');
	}
}
} catch(err) {
	if(ChannelR == undefined) {
		message.channel.send('Wrong command format! Do [Prefix]link [TwitchUsername] [DiscordName]');
	} else {
		client.channels.find(channel => channel.name === ChannelR).send('Wrong command format! Do [Prefix]link [TwitchUsername] [DiscordName]');
	}
}
});
} else {
	if(ChannelR == undefined) {
		message.channel.send('Currency is disabled!');
	} else {
		client.channels.find(channel => channel.name === ChannelR).send('Currency is disabled!');
	}
}
};

module.exports.help = {
name: 'link',
desc: 'Link discord account to twitch account!'
};
