const Discord = require("discord.js");
const fetch = require('node-fetch');
const fs = require("fs");
const client = new Discord.Client();
const { token, Prefix, ChannelR, RoleHolder } = require('../../config.json');

module.exports.run = (client, message, args) => {
	try {
		let date = new Date();
		client.setInterval(QuestionDay, QuestionInt);
		message.channel.send("Bot is now hooked to the " + QuestionTitle + ". Every " + QuestionInt + "ms it will look for a new question!");
		QuestionDay(message, client);
	} catch(e) {
		NoQuestion(message, client);
	}
};

module.exports.help = {
	name: "question",
	desc: "Hook the question up with the api, so that it can grab a random question each time."
};


const QuestionDay = (message, client) => {
	try {
		fetch(QuestionLink).then(res => res.json())
		.then(json => {	
			let body = json.results;	  
			body.forEach(function(item){
				let embed = new Discord.RichEmbed()
					.addField("Question of the day", item.question)
					.setTimestamp()
				     if(ChannelR == undefined) {
					message.channel.send({embed: embed});
     				     } else {
					client.channels.find(channel => channel.name === ChannelR).send({embed: embed});
     				     }	
				//console.log(item.question);
			});			
		});
	} catch(e) {
		
		NoQuestion(message);
	}
};

const NoQuestion = (message, client) => {
		let date = new Date();
		message.channel.send(CalendarLink+ '/' +date.getDate()+ '.json');
		let embed = new Discord.RichEmbed()
			.setColor(0xfef08d)
			.setTitle("Couldnt grab question!")
			.addField("+--------------------------------------------------+", "Make sure the link is set right.")
			if(ChannelR == undefined) {
				message.channel.send({embed: embed});
     			} else {
				client.channels.find(channel => channel.name === ChannelR).send({embed: embed});
     			}	
};
