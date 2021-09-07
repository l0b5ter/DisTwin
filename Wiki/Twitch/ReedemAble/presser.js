const tmi = require("tmi.js");
const robot = require('robotjs');
const path = require("path");

const Keys = ["a", "b", "c"]; //keys being pressed by bot, use .:. between letter to press them at the same time (shift.:.a = A).

module.exports.run = (client, channel, user, message, self) => {
        for (i = 0; i < Keys.length; i++) {
		if(Keys[i].includes(".:.")) {
			var array = Keys[i].split(".:.");
			for(x = 0; x < array.length; x++) {
				robot.keyToggle(array[x], 'down');
			}
			for(y = 0; y < array.length; y++) {
				robot.keyToggle(array[y], 'up');
			}
		} else {
			robot.keyTap(Keys[i]);
		}
        }
};

module.exports.help = {
	name: "presser",					//Custome-reward-id/msg-id for the right reedemable
	desc: "Help your streamer by pressing his keys!"	//Description
};
