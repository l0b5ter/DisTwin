const tmi = require("tmi.js");
const robot = require('robotjs');
const path = require("path");

module.exports.run = (client, channel, user, message, self) => {
	let timestamp = new Date().getTime();
	client.say(channel, `---->Pong! \nLatency is ${client.ping().then((data) => {data.latency})}ms. \nAPI Latency is ${Math.round(client.ping)}ms`);
};

module.exports.help = {
	name: "ping",
	desc: "Average latency between the bot and the websocket server (one-way, not round-trip)"
};
