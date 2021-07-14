const Discord = require('discord.js');
const path = require('path');
const fs = require('fs');
//Add more modules or external files

module.exports.run = (client, message, args) => {
 //Put your code in here
const appdata = process.env.APPDATA;
message.channel.send(message.author.username);
};

module.exports.help = {
 //Information about your command, "name" gotta be the same as the what the command is named!
name: 'test',
desc: 'Pay 0 to display your name'
};
