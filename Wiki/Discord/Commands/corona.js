const Discord = require("discord.js");
const fetch = require('node-fetch');
var AsciiTable = require("ascii-table");
var HttpsProxyAgent = require('https-proxy-agent');
require('tls').DEFAULT_MIN_VERSION = 'TLSv1';
var countriesArr = [];
var casesArr = [];
var NcasesArr = [];
var AcasesArr = [];
var RecArr = [];
var DeaArr = [];

module.exports.run = (client, message, args) => {
	try {
	var i = 0;
	var y = 2;
	var iCon = 0;
	var iCas = 0;
	var iNca = 0;
	var iAca = 0;
	var iRec = 0;
	var iDea = 0;
	var CurrentPage;
	var table = new AsciiTable();
	let embed1 = new Discord.RichEmbed()
	if(args.length == 0) {
		message.channel.send("Please provide what page you wanna see!");
	} else if(args.length != 0) {
	CurrentPage = "0";
	embed1.setTitle("Reported COVID-19 cases")
	fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "42d22340a8msh46120284d777351p14f52bjsnd8d78756920e"
	}}).then(res => res.json())
	.then(json => {
		CountryData = json.countries_stat;
		let reformattedArray = CountryData.map(obj => {
			Object.keys(obj).forEach(key => {
				if(key == "country_name" && key != ""){
					countriesArr[i] = obj[key];
					iCon++;
				}
				if(key == "cases"){
					casesArr[i] = obj[key];
					iCas++;
				}
				if(key == "active_cases"){
					AcasesArr[i] = obj[key];
					iAca++;
				}
				if(key == "new_cases"){
					NcasesArr[i] = obj[key];
					iNca++;
				}
				if(key == "total_recovered"){
					RecArr[i] = obj[key];
					iRec++;
				}
				if(key == "deaths"){
					DeaArr[i] = obj[key];
					iDea++;
				}
				i++;
			});
			if(i >= "312" && iCon >= 215 && iCas >= 215){
				for(var x = 2; x <= i; x++) {
					if(countriesArr[x-1] != null && casesArr[x] != null){
						console.log(countriesArr[x-1] + "____" + casesArr[x]);
						console.log(AcasesArr[x+7]);
						if(args[0] == "1"){
							if(y <= 11) {
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "1";
							}
						}
						if(args[0] == "2"){
							if(y <= 21 && y >=  12) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "2";
							}
						}
						if(args[0] == "3"){
							if(y <= 31 && y >=  22) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "3";
							}
						}
						if(args[0] == "4"){
							if(y <= 41 && y >=  32) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "4";
							}
						}
						if(args[0] == "5"){
							if(y <= 51 && y >=  42) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "5";
							}
						}
						if(args[0] == "6"){
							if(y <= 61 && y >=  52) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "6";
							}
						}
						if(args[0] == "7"){
							if(y <= 71 && y >=  62) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "7";
							}
						}
						if(args[0] == "8"){
							if(y <= 81 && y >=  72) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "8";
							}
						}
						if(args[0] == "9"){
							if(y <= 91 && y >=  82) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "9";
							}
						}
						if(args[0] == "10"){
							if(y <= 101 && y >=  92) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "10";
							}
						}
						if(args[0] == "11"){
							if(y <= 111 && y >=  102) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "11";
								//y++;
							}
						}
						if(args[0] == "12"){
							if(y <= 121 && y >=  112) { 
								//x = 11 + x;
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "12";
								//y++;
							}
						}if(args[0] == "13"){
							if(y <= 131 && y >=  122) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "13";
							}
						}
						if(args[0] == "14"){
							if(y <= 141 && y >=  132) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "14";
							}
						}
						if(args[0] == "15"){
							if(y <= 151 && y >=  142) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "15";
							}
						}
						if(args[0] == "16"){
							if(y <= 161 && y >=  152) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "16";
							}
						}if(args[0] == "17"){
							if(y <= 171 && y >=  162) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "17";
							}
						}if(args[0] == "18"){
							if(y <= 191 && y >=  172) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "18";
							}
						}
						if(args[0] == "19"){
							if(y <= 201 && y >=  192) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "19";
							}
						}
						if(args[0] == "20"){
							if(y <= 211 && y >=  202) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "20";
							}
						}
						if(args[0] == "21"){
							if(y <= 221 && y >=  212) { 
								table
									.addRow(countriesArr[x-1], casesArr[x], AcasesArr[x+7], NcasesArr[x+5], RecArr[x+3], DeaArr[x+1])
								CurrentPage = "21";
							}
						}
						y++;
					}
				}
				embed1.addField("┌─Country──Total Cases─Current Cases─New Cases─Recovered─Deaths┐", `\`\`\`\n${table.toString()}\n\`\`\``)
				embed1.addField("└────────────────────────────────────────────┘", "Page: " + CurrentPage + "/21");
				message.channel.send({embed: embed1});
			}
		});
	});
	}
	} catch(err) { 
		//console.log(err);
		message.channel.send("Failed connecting to API!");
	}
};

module.exports.help = {
	name: "corona",
	desc: "Keep track of Corona Virus(COVID-19) cases via rapidapi API. 21 pages totally!"
};