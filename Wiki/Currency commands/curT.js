const tmi = require('tmi.js');
const robot = require('robotjs');
var player = require('play-sound')(opts = {});
const path = require('path');
const fs = require('fs');



module.exports.run = (client, args, channel, user, message, self) => {
const appdata = process.env.APPDATA;
	if (fs.existsSync(appdata + "/DisTwin/Currency/BankAccount.json")){
		if(!args[0] == ""){
			var user = args[0].replace("@", "");
		} else {
			var user = user['display-name'];
		}
	        fs.readFile(appdata + "/DisTwin/Currency/BankAccount.json", 'utf8', (err, jsonString) => {
			console.log(user['display-name']);
			try {
				const jsonObj = JSON.parse(jsonString);
				jsonObj["Accounts"].forEach(item =>
				{
					if(item.Name == user)
					{
						client.say(channel, item.Name + ': ' + item.price);
					}
				});
			} catch(err) {
				client.say(channel, 'Couldnt grab currency for user');
			}
		});
	} else {
		client.say(channel, 'Couldnt grab current currency for user');
	}
};



module.exports.help = {
name: 'cur',
desc: 'Display current currency for user.'
};
