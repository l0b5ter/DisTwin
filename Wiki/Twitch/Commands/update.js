const tmi = require("tmi.js");
const robot = require('robotjs');
const fetch = require('node-fetch');
const path = require("path");
var request = require('request');

const CustomeRewardID = '';
const BroadCasterID = '';

const headers = {
	'client-id': '',
	'Authorization': 'Bearer ',
	'Content-Type': 'application/json' 
};

module.exports.run = (client, channel, user, message, self) => {
	var bodyS = {
		"cost": 60,
		"prompt": "Owned by: "+ user
	};
	var options = {
		url: 'https://api.twitch.tv/helix/channel_points/custom_rewards?broadcaster_id=' + BroadCasterID + '&id=' + CustomeRewardID,
		method: 'PATCH',
		headers: headers,
		json: true,
		body: bodyS
	};
	try {
		request(options, callback);
	} catch(e) {
		console.log(e);
	}
};

module.exports.help = {
	name: "update",										//Custome-reward-id/msg-id for the right reedemable
	desc: "Update a CustomReward with its custom-reward-id"					//Description
};

const callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
        console.log("custom-reward-id UPDATED");
    }
}