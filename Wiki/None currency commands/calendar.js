const Discord = require("discord.js");
const fetch = require('node-fetch');
const fs = require("fs");
const client = new Discord.Client();
const { token, Prefix, CalendarInt, CalendarLink, ChannelCalendar, CalendarTitle } = require('../../config.json');

module.exports.run = (client, message, args) => {
	try {
		let date = new Date();
		client.setInterval(CalendarDay, CalendarInt);
		message.channel.send("Bot is now hooked to the " + CalendarTitle + ". Every " + CalendarInt + "ms it will look for new plans!");
		CalendarDay(message, client);
	} catch(e) {
		NoEvent(message, client);
	}
	//client.setInterval(CalendarDay, CalendarInt);
	

};

module.exports.help = {
	name: "calendar",
	desc: "Hook the calendar up with the api, so that it can grab upcomings plans."
};


const CalendarDay = (message, client) => {
	try {
		let date = new Date();
		fetch(CalendarLink+ '/' +date.getDate()+ '.json').then(res => res.json())
		.then(json => {	
			let embed = new Discord.RichEmbed()
				.setColor(0xfef08d)
				.setTitle("**__Events today__**")
			client.channels.find(channel => channel.name === ChannelCalendar).send({embed: embed});		  
			json.forEach(function(item){
				let embed = new Discord.RichEmbed()
					.setTitle(item.eventName)
					.addField(item.des, "Starting at " + item.time)
					.setTimestamp()
				client.channels.find(channel => channel.name === ChannelCalendar).send({embed: embed});
			});
			
			
		});
	} catch(e) {
		
		NoEvent(message, client);
	}
};

const NoEvent = (message, client) => {
		let date = new Date();
		message.channel.send(CalendarLink+ '/' +date.getDate()+ '.json');
		let embed = new Discord.RichEmbed()
			.setColor(0xfef08d)
			.setAuthor("Nothing planned today!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsQt95YxbbcQuZck3XOlfSXOhGvs9xQLrz7CUt9pRck-Opn1tlg")
			.addField("+--------------------------------------------------+", "Go to http://spiritanimals0api.tk/Calendar/index.php to add plans^^")
		client.channels.find(channel => channel.name === ChannelCalendar).send({embed: embed});
};