# DisTwin

DisTwin is a frame which enables cross communication between bots, mainly twitch and discord bots. Thats not all it allows you to see both bot outputs in one window, along with bot management.

It comes with a twitch and discord bot that can be installed and edited while in this program. These bot doesnt need you to restart whenever you add/edit/remove a command, just do [prefix]reload to load in all the commands. So no more downtime!!!!!

The fantastic about these bots is that when a command doesnt work, it will give you a error and load in every command except the failed one. So you dont have to be worried about a command that will not work or even worse, crash the bot.

Twitch bot comes with reedem point handling, setting up a reedemable reward will allow the bot to trigger a event.
The bot also can click keys on your keyboard, so let your chat mess with you and automatically press a key on your keyboard. This function work with reedem points and commands, but to let it work with commands you MUST enable the bot currency!

Both bots comes with option to work with a common currency, which can be enabled in the program.

Wanna use your already existing bot? No worries, just move or change the bot path. Read below to get more info.
 
First time setting it up or getting to know the program? KEEP THIS GUIDE IN BACKGROUND!!
.

.

.
### Features:

0. Install, Config and START!
1. Easier bot management.
2. Option to redirect both output to program and log files.
3. Advanced command handling. No more downtime!
4. Reedem points handling.
5. Easy to new reedemable rewards and commands.
6. Option to enable crossover currency.
7. Allow chat to automatically click your keys.

### Regards
Discord: lobster#5273
Twitch: loster31345


## GUIDE
Before we jumo into it when theres [something], replace the whole [something] with your correct value.

.

![EXIT button](http://wiad.tk/images/DisTwin/Exit.png)

This button is used to clsoe the application/program, when you hit it you will get a question if you wanna disconnect bots. Clicking OK will terminate, disconnect all of the assosciated bots and set it so you gotta connect them again throught the "Account" tab.

### Account

![Account tab](http://wiad.tk/images/DisTwin/Account.png)

Account tab is where you install each bot and connect them.

First lets hit install to install desired bot, or why not both?
![Account install](http://wiad.tk/images/DisTwin/Account1.png)

After successfully installating the button will be disabled and the will show installed.

However if you wanna use a already existing bot, move it to "%appdata%/DisTwin/bots/[BotType]" or locate to the settings file "%appdata%/DisTwin/Settings.xml" and change the botpath. Remember that the main bot file is named bot.js. Because the program is targeting app.js and config.json!

#### Twitch Account
If your using an existing twitch bot, jump over this section. This setup is aimed towards tmijs and installed bot.
![Account Twitch](http://wiad.tk/images/DisTwin/Account2.png)

Oki, lets start setting up the twitch bot. To allow the bot into the chat it needs an twitch account to interact with. You can use your own (streamers account) or create one specific for this use, the only important thing to remember is that it needs moderator perm. So another from yours gotta have mod. 

"Bot username" this is simply the account username of which twitch account your using. In my chase this is loster31345.

"Bot authentication" this is alittle more tricky, because its not your password. You must allow scripts to run on the account to get your token. Which is simply done by heading over here ("https://twitchapps.com/tmi/"), click connect and follow the steps. When your done you sud get a nice long token, copy it and paste it into "Bot authentication".

"Twitch channel" this is where the bot sud manage and keep track of chat. Simply put # before the channel name. In my case "#loster31345".

"Prefix" this is used to define if a message is a command or simply a message. Put anything in here and every command gotta start with that prefix. Leaving it blank will let the bot think that every message is a command, but no worries it will work fine, it will only get alittle slow.

Awesome, if every field is filled out you can now hit the connect button. When you hit it, the color sud change to green, this means its conencted using what you put in above.
Your done here!


#### Discord Account
If your using an existing discord bot, this will only target the config.json file if yours are using one. Otherwise jump over this.
![Account Discord](http://wiad.tk/images/DisTwin/Account3.png)

Oki, lets start setting up the discord bot. First before everything you need a bot account to use, head over to "https://discord.com/developers/applications/" and create an application for the bot. Check every premissions you want on the bot, i would recommend checking everything, this way your not limited when you make new commands. Use the "client_id" on the application and replace the "XXX" in this link ("https://discordapp.com/api/oauth2/authorize?scope=bot&client_id=XXX"), select the server to add it to.
Theres lots of guides on how to setup a discord bot, so if it was confusing just search it up "How to make a discord bot" or something ;-)

Under the "Bot" tab you gotta create your token, copy it and put it in "Bot Token".

"Prefix" this is the same as the Twitch bot. Is used to define if a message is a command or simply a message. Put anything in here and every command gotta start with that prefix. Leaving it blank will let the bot think that every message is a command, but no worries it will work fine, it will only get alittle slow.

Daym, now we got 2 accounts hooked up. If every field is filled out you can now hit the connect button. When you hit it, the color sud change to green, this means its conencted using what you put in above.
Your done here!


### Console

![Console](http://wiad.tk/images/DisTwin/Console.png)

This is where the magic happens! Where you turn on/off the bots.
![Console Twitch](http://wiad.tk/images/DisTwin/ConsoleTwi.png)
![Console Discord](http://wiad.tk/images/DisTwin/ConsoleDis.png)

Simply hit start to start the bot and stop to stop it. Those 2 buttons on the right is change locations and size of the consoles.

### Command
ENTERING THIS WITHOUT CONNECTING A BOT WOULD GIVE OUT A WARNING, AND IN WORST CASE CRASH THE PROGRAM.
![Command](http://wiad.tk/images/DisTwin/Command.png)

This is probably the most advanced section, but if you master it, making a command would only take 5sec!

Under each bot type theres 3 sections (Simple, advanced and import).

#### Twitch
When you enter you will first open the twitch command helper

The first you will see is how many commands that was found for the bot, you can hit the open button to see then, remove or edit them. However theres no proper way to edit in the program, only add new ones.

Below you have "Command", the first part is the Prefix which you made earlier in "Account". Your not able to change the Prefix here, it gets loaded from the bot config. The other big text field is where you put the new command name. Like "test".

Before doing anything else, lets look at the different sections.

##### Simple
![Command ST](http://wiad.tk/images/DisTwin/CommandST.png)

This is the easiest way to make a new command, however your limited.

"Price" this wont matter unless you enable currency, if currency is disable, will make the bot ignore this. Basicly this is how much the command cost, 0 means free.

"Keys" this wont matter unless you enable currency, would be weird to trigger keys for free right? Basicly allows caht to automatically hit keys on your side. Use SPACE between each key to press they in right order, .:. between each key is used when you wanna trigger both at the same time. Example: "a b" = a b, "a b shift.:.a" = a b A.

"Response" this is what the bot sud respond with when they trigger the command, leaving blank will leave no response.

After filling the desire ones, hit "create" to create and add the new command to the bot.

##### Advance
![Command AT](http://wiad.tk/images/DisTwin/CommandAT.png)

This is probably the hardest way, however your have unlimited options!

You see the big black field, well thats the place where you put your fancy code.

To get you started on writing the code, heres a boilerplate which you can use^^ ("https://github.com/l0b5ter/DisTwin/blob/main/Wiki/TwitchCommand_Boilerplate")

#### Discord
![Command SD](http://wiad.tk/images/DisTwin/CommandSD.png)

Hit discord to see how many commands it finds for your discord bot.

Im not gonna cover this as deep which i did with the Twich part, Import and advanced is nearly the same. You do the same atleast.
Boilerplate for Discord is ("https://github.com/l0b5ter/DisTwin/blob/main/Wiki/DiscordCommand_Boilerplate").

The simple section is the same as the Twitch one, the only different is that the Keys field dont work at all here. Becasue the discord bot sud not trigger keys on the streamers side. Would be really awkward and weird.


