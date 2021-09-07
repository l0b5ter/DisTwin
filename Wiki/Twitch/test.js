const tmi = require("tmi.js");
const robot = require('robotjs');
const path = require("path");
const open = require('open')


module.exports.run = (client, channel, user, message, self) => {
	try{
		var root = path.dirname(require.main.filename);
		open('FILE:\\' + root + "/MsgModule/ReedemAble/test.mp3", {
			app: {
				name: open.apps.chrome,
				arguments: ['--new-window', '--incognito']
			}
		});
		console.log('FILE:\\' + root + "/MsgModule/ReedemAble/test.mp3");'FILE:\\' + root + "/MsgModule/ReedemAble/test.mp3"
	} catch (err){
		console.log("Nop-test");
		console.log(err);
	}
};

module.exports.help = {
	name: "test",			//Custome-reward-id/msg-id for the right reedemable
	desc: "Play a local mp3 file"	//Description
};