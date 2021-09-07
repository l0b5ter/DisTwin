const Discord = require('discord.js');
const path = require('path');
const fs = require('fs');
const { token, Prefix, ChannelR, RoleHolder } = require('../../config.json');
//Add more modules or external files

module.exports.run = (client, message, args) => {
     const appdata = process.env.APPDATA;
 //Put your code in here
     if(ChannelR == undefined) {
	message.channel.send(message.author.username);
     } else {
	client.channels.find(channel => channel.name === ChannelR).send(message.author.username);
     }	
};

module.exports.help = {
 //Information about your command, "name" gotta be the same as the what the command is named!
name: 'test',
desc: 'Pay 0 to display your name'
};
