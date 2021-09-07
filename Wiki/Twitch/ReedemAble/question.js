const tmi = require("tmi.js");
const robot = require('robotjs');
const fetch = require('node-fetch');
const path = require("path");

const QuestionInt = 360000;

module.exports.run = (client, channel, user, message, self) => {
	try {
		QuestionDay(client, args, channel, user, message, self);
	} catch(e) {
		NoQuestion(client, args, channel, user, message, self, e);
	}
};

module.exports.help = {
	name: "question",										//Custome-reward-id/msg-id for the right reedemable
	desc: "Hook the question up with the api, so that it can grab a random question each time."	//Description
};


const QuestionDay = (client, args, channel, user, message, self) => {
	try {
		fetch("https://opentdb.com/api.php?amount=1").then(res => res.json())
		.then(json => {	
			let body = json.results;	  
			body.forEach(function(item){
				client.say(channel, item.question);
			});			
		});
	} catch(e) {
		
		NoQuestion(client, args, channel, user, message, self);
	}
};

const NoQuestion = (client, args, channel, user, message, self, e) => {
		let date = new Date();
		client.say(channel, e);
};
