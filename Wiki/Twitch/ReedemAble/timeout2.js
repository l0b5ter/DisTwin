const tmi = require("tmi.js");
const robot = require('robotjs');
const path = require("path");

const muteTimer = 60; //in seconds
commandName = "timeout2";

module.exports.run = (client, channel, user, message, self) => {
	try{
	if(Math.round(Math.random()) === 1){
		let target = message;
		if(message.startsWith("@")){
			target = message.replace('@', '');
		}
		client.timeout(channel, target, muteTimer, "Muted by " + user['display-name']).then((data) => {
			console.log(`* Executed ${commandName} Command, ${data}`);
		});
	} else {
		client.timeout(channel, user['display-name'], muteTimer, "Muted by " + user['display-name']).then((data) => {
			console.log(`* Executed ${commandName} Command, ${data}`);
		});
	}
	} catch (err){
		console.log(err);
	}
};

module.exports.help = {
	name: "timeout2",				//Custome-reward-id/msg-id for the right reedemable
	desc: "Timeout someone in chat, or yourself?"	//Description
};
