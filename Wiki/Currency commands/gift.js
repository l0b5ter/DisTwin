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
var existGif = "false";
const jsonObj = JSON.parse(jsonString);
jsonObj['Accounts'].forEach(item =>
{
if(item.Name == user['display-name'])
{
existGif = "true";
item.price = (parseInt(item.price) - parseInt(args[1])).toString();
fs.writeFileSync(appdata + '/DisTwin/Currency/BankAccount.json', JSON.stringify(jsonObj, null, 2));
}
});
if(existGif == "true"){
	//try {
var existRec = "false";
//const jsonObj = JSON.parse(jsonString);
jsonObj['Accounts'].forEach(item =>
{
if(item.Name == args[0].replace("@", ""))
{
existRec = "true";
item.price = (parseInt(item.price) + parseInt(args[1])).toString();
client.say(channel, user['display-name'] + " gifted " + args[0] + " " + args[1]);
fs.writeFileSync(appdata + '/DisTwin/Currency/BankAccount.json', JSON.stringify(jsonObj, null, 2));
}
});
if(existRec != "true"){
	client.say(channel, user['display-name'] + " gifted " + args[0] + " " + args[1]);
	const jsonObj = JSON.parse(jsonString);
	jsonObj['Accounts'].push({ Name: args[0].replace("@", ""), Discord: "", price: args[1] });
	fs.writeFileSync(appdata + '/DisTwin/Currency/BankAccount.json', JSON.stringify(jsonObj, null, 2));
}
}
} catch(err) {
client.say(channel, 'Insufficient currency, you need ' + args[1]);
}
});
} else {
client.say(channel, 'Are you sure your not poor?');
}
};

module.exports.help = {
name: 'gift',
desc: 'Gift someone some of your currency!'
};