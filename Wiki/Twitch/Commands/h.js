const tmi = require('tmi.js');
const robot = require('robotjs');
const path = require('path');
const fs = require('fs');
const Keys = ["a","b","shift.:.a"];



module.exports.run = (client, args, channel, user, message, self) => {
const appdata = process.env.APPDATA;
	if (fs.existsSync(appdata + "/DisTwin/Currency/BankAccount.json")){
	        fs.readFile(appdata + "/DisTwin/Currency/BankAccount.json", 'utf8', (err, jsonString) => {
			try {
				const jsonObj = JSON.parse(jsonString);
				jsonObj["Accounts"].forEach(item =>
				{
					if(item.Name == user['display-name'])
					{
						item.price = (parseInt(item.price) - parseInt("10")).toString();
						for (i = 0; i < Keys.length; i++) {
							if(Keys[i].includes(".:.")) {
								var array = Keys[i].split(".:.");
								for(x = 0; x < array.length; x++) {
									robot.keyToggle(array[x], 'down');
								}
								for(y = 0; y < array.length; y++) {
									robot.keyToggle(array[y], 'up');
								}
							} else {
								robot.keyTap(Keys[i]);
							}
						}
						client.say(channel, 'werrrrwg');
						fs.writeFileSync(appdata + "/DisTwin/Currency/BankAccount.json", JSON.stringify(jsonObj, null, 2));
					}
				});
			} catch(err) {
				client.say(channel, 'Insufficient currency, you need 10');
			}
		});
	} else {
		client.say(channel, 'werrrrwg');
	}
};



module.exports.help = {

name: 'h',

desc: 'Pay 100 to display wegewgewg'

};
