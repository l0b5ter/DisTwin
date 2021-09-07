const tmi = require("tmi.js");
const robot = require('robotjs');
const path = require("path");

const muteTimer = 60; //in seconds

module.exports.run = (client, channel, user, message, self) => {
	client.timeout(channel, user['display-name'], muteTimer, "Muted by " + user['display-name']).then((data) => {
		console.log(`* Executed ${commandName} Command, ${data}`);
	});
};

module.exports.help = {
	name: "timeout",		//Custome-reward-id/msg-id for the right reedemable
	desc: "Timeout yourself"	//Description
};