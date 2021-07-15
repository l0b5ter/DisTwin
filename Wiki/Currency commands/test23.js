const Discord = require('discord.js');
const path = require('path');
const fs = require('fs');

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
message.channel.send('Test');
fs.writeFileSync(appdata + '/DisTwin/Currency/BankAccount.json', JSON.stringify(jsonObj, null, 2));
}
});
} catch(err) {
message.channel.send('Insufficient currency, you need 0');
}
});
} else {
message.channel.send('Test');
}
};

module.exports.help = {
name: 'test23',
desc: 'Pay 0 to display Test'
};