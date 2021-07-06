const tmi = require('tmi.js');
const robot = require('robotjs');
var player = require('play-sound')(opts = {});
const path = require('path');
const fs = require('fs');

module.exports.run = (client, args, channel, user, message, self) => {
const appdata = process.env.APPDATA;
if (fs.existsSync(appdata + '/DisTwin/Currency/BankAccount.json')){
fs.readFile(appdata + '/DisTwin/Currency/BankAccount.json', 'utf8', (err, jsonString) => {
try {
const jsonObj = JSON.parse(jsonString);
var existRec = "false";
if(jsonObj['MoneyTree'].includes(user['display-name'])){
jsonObj['Accounts'].forEach(item =>
{
if(item.Name == args[0].replace("@", ""))
{
existRec = "true";
item.price = (parseInt(item.price) + parseInt(args[1])).toString();
client.say(channel, args[0] + " earned " + args[1]);
fs.writeFileSync(appdata + '/DisTwin/Currency/BankAccount.json', JSON.stringify(jsonObj, null, 2));
}
});
if(existRec != "true"){
	client.say(channel, args[0] + " earned " + args[1]);
	const jsonObj = JSON.parse(jsonString);
	jsonObj['Accounts'].push({ Name: args[0].replace("@", ""), Discord: "", price: args[1] });
	fs.writeFileSync(appdata + '/DisTwin/Currency/BankAccount.json', JSON.stringify(jsonObj, null, 2));
}
} else {
client.say(channel, 'You dont have premission to perform this command!');	
}
} catch(err) {
client.say(channel, 'Insufficient currency command, look at command gui!');
}
});
} else {
client.say(channel, 'Are you a sure you can do this?');
}
};

module.exports.help = {
name: 'earn',
desc: 'Someone worth giving alittle?'
};