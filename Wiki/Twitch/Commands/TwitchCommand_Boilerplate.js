const tmi = require('tmi.js');
const robot = require('robotjs');
var player = require('play-sound')(opts = {});
const path = require('path');
//Add more modules or external files

module.exports.run = (client, args, channel, user, message, self) => {
//Put your code in here
client.say(channel, 'wegewgewg');
};

module.exports.help = {
 //Information about your command, "name" gotta be the same as the what the command is named!
name: 'hei',
desc: 'Pay 100 to display wegewgewg'
};
