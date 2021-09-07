const tmi = require('tmi.js');
const robot = require('robotjs');
const path = require('path');
const fs = require('fs');

module.exports.run = (client, args, channel, user, message, self) => {
const appdata = process.env.APPDATA;
if (fs.existsSync(appdata + '/DisTwin/Currency/BankAccount.json')){
fs.readFile(appdata + '/DisTwin/Currency/BankAccount.json', 'utf8', (err, jsonString) => {
try {
const jsonObj = JSON.parse(jsonString);
jsonObj['Accounts'].forEach(item =>
{
if(item.Name == user['display-name'])
{
item.price = (parseInt(item.price) - parseInt('10')).toString();
client.say(channel, 'Heeeei!');
fs.writeFileSync(appdata + '/DisTwin/Currency/BankAccount.json', JSON.stringify(jsonObj, null, 2));
}
});
} catch(err) {
client.say(channel, 'Insufficient currency, you need 0');
}
});
} else {
client.say(channel, 'Heeeei!');
}
};

module.exports.help = {
name: 'test',
desc: 'Pay 0 to display Heeeei!'
};
