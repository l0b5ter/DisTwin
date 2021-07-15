const Discord = require('discord.js');
const path = require('path');
const fs = require('fs');

module.exports.run = (client, message, args) => {
const appdata = process.env.APPDATA;
message.channel.send(message.author.username);
};

module.exports.help = {
name: 'test12',
desc: 'Pay 0 to display Heeeeeei'
};