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
jsonObj['Accounts'].forEach(item =>
{
if(item.Discord == message.author.username)
{
item.price = (parseInt(item.price) - parseInt('0')).toString();
		if(ChannelR == undefined) {
			message.channel.send("test");
     		} else {
			client.channels.find(channel => channel.name === ChannelR).send("test");
     		}	
fs.writeFileSync(appdata + '/DisTwin/Currency/BankAccount.json', JSON.stringify(jsonObj, null, 2));
}
});
} catch(err) {
		if(ChannelR == undefined) {
			message.channel.send('Insufficient currency, you need 0');
     		} else {
			client.channels.find(channel => channel.name === ChannelR).send('Insufficient currency, you need 0');
     		}	
}
});
} else {
		if(ChannelR == undefined) {
			message.channel.send('Insufficient currency, you need 0');
     		} else {
			client.channels.find(channel => channel.name === ChannelR).send('Insufficient currency, you need 0');
     		}	
}
};

module.exports.help = {
name: 'test23',
desc: 'Pay 0 to display Test'
};
