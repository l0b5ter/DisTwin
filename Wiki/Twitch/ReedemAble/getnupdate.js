const tmi = require("tmi.js");
const robot = require('robotjs');
const fetch = require('node-fetch');
const path = require("path");
var request = require('request');

var CustomRewardBody;
const PointsToUpdateEachTime = 10;

const CustomeRewardID = '';
const BroadCasterID = '';

const headers = {
	'client-id': '',
	'Authorization': 'Bearer ',
	'Content-Type': 'application/json' 
};


module.exports.run = (client, channel, user, message, self) => {
	var options = {
		url: 'https://api.twitch.tv/helix/channel_points/custom_rewards?broadcaster_id=' + BroadCasterID + '&id=' + CustomeRewardID,
		method: 'GET',
		headers: headers,
		json: true
	};
	try {
		request(options, callback);
	} catch(e) {
		console.log(e);
	}
};

module.exports.help = {
	name: "getnupdate",									//Custome-reward-id/msg-id for the right reedemable
	desc: "Get data on a custom-reward and update using old values"			        //Description
};



//Callback from get custom-reward
const callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
	CustomRewardBody = body 
	UpdateReedemAble();
    }
}

//Update custom-reward
const UpdateReedemAble = (client, channel, user, message, self) => {
	var bodyS = {
		"cost": CustomRewardBody["data"][0]["cost"] + PointsToUpdateEachTime,
		"prompt": "Owned by: "+ user['display-name']
	};
	var optionsUpdate = {
		url: 'https://api.twitch.tv/helix/channel_points/custom_rewards?broadcaster_id=' + BroadCasterID + '&id=' + CustomeRewardID,
		method: 'PATCH',
		headers: headers,
		json: true,
		body: bodyS
	};
	try {
		request(optionsUpdate, callbackUpdate);
	} catch(e) {
		console.log(e);
	}
};

const callbackUpdate = (error, response, body) => {
    if (!error && response.statusCode == 200) {
        console.log("custom-reward-id UPDATED");
    }
}
