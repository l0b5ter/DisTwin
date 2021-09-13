# DisTwin

DisTwin is a frame which enables cross communication between bots, mainly twitch and discord bots. Thats not all, it allows you to see both bot outputs in one window, along with bot management.

It comes with a twitch and discord bot that can be installed and edited while in this program. These bot doesnt need you to restart whenever you add/edit/remove a command or reedemable, just do [prefix]reload to load in all the commands and reedemables. So no more downtime!!!!!

The fantastic about these bots is that when a command or reedemable doesnt work, it will give you a error and load in every command except the failed one. So you dont have to be worried about a command that will not work or even worse, crash the bot.

Twitch bot comes with reedem point handling, where it will allow you to see all your reedemables. Thier cost, cooldown, is_enabled and more. Nearly all reedemable comes with the ability where you can set it up to allow the bot to trigger a event. All reedemables which require user input comes with this ability.
The bot also can click keys on your keyboard, so let your chat mess with you and automatically press a key on your keyboard. This function work with reedem points and commands, but to let it work with commands you MUST enable the bot currency from DisTwin!

Both bots comes with option to work with a common currency, which can be enabled in the program.

Wanna use your already existing bot? No worries, just move or change the bot path. Read below to get more info.
 
First time setting it up or getting to know the program? KEEP THIS GUIDE IN BACKGROUND!!
.

.

.
### Features:

0. Install, Config and START!
1. Easier bot management.
2. Both twitch and discord bot.
3. Option to redirect both output to program and log files.
4. Advanced command/reedemable handling. No more downtime!
5. Reedem points handling.
6. See all Reedemables for channel.
7. Easy to add new reedemable rewards and commands.
8. Option to enable crossover currency.
9. Allow chat to automatically click your keys.

### Regards
- Discord: lobster#5273
- Twitch: loster31345


## GUIDE
Before we jump into it, when theres [something] replace the whole [something] with your correct value.

.

![EXIT button](http://wiad.tk/images/DisTwin/Exit.png)

This button is used to close the application/program, when you hit it you will get a question if you wanna disconnect the bots. Clicking OK will terminate, disconnect all of the assosciated bots and make it so you gotta connect the bots again throught the "Account" tab. This feature is added to keep credentials safe.

### Account

![Account tab](http://wiad.tk/images/DisTwin/Account.png)

Account tab is where you install each bot and connect them.

First lets hit install to install desired bot, or why not both?
![Account install](http://wiad.tk/images/DisTwin/Account1.png)

After successfully installating, the button will be disabled and button text will show installed.

However if you wanna use a already existing bot, move it to "%appdata%/DisTwin/bots/[BotType]", go to settings tab and update the bot path, or locate the settings file "%appdata%/DisTwin/Settings.xml" and change the botpath. Remember that the main bot file is named bot.js. Because the program is targeting bot.js and config.json!

#### Twitch Account
If your using an existing twitch bot, jump over this section. This setup is aimed towards tmijs and recently installed bot.
![Account Twitch](http://wiad.tk/images/DisTwin/Account2.png)

Oki, lets start setting up the twitch bot. To allow the bot into the chat it needs an twitch account to interact with. You can use your own (streamers account) or create one specific for this use, the only important thing to remember is that it needs moderator perm. So in another word it needs mod perms, these perms are called **scopes**.

"Bot username" this is simply the account username of which twitch account your using. In my chase this is loster31345.

"Bot authentication" this is alittle more tricky, because its not your password. You must allow scripts to run on the account to get your token. There are severals ways to obtain this token, but below are a some suggested ones and what **scopes** you will get.
- ("https://twitchapps.com/tmi/") : Will give the most basic **scopes**, which is ["chat:edit", "chat:read", "openid", "viewing_activity_read", "whispers:edit", "whispers:read"]. You cant manage reedemables, ads, subs etc. with this one! 
- ("https://twitchtokengenerator.com/") : Lets you decide what **scopes** you wanna use! Under each section im gonna mention which **scopes** that are required.

After heading to either one of the links above, click connect or generate and follow the steps. When your done you sud get a nice long token, copy it and paste it into "Bot authentication".

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

.

Finished commands can be found here ("https://github.com/l0b5ter/DisTwin/tree/main/Wiki"), jsut hit import :D

##### Import

Allows you to import existing command to the bot. Click on the command you wanna import and poof the command is inserted in your bot.

#### Discord
![Command SD](http://wiad.tk/images/DisTwin/CommandSD.png)

Hit discord to see how many commands it finds for your discord bot.

Im not gonna cover this as deep which i did with the Twich part, Import and advanced is nearly the same. You do the same atleast.
Boilerplate for Discord is ("https://github.com/l0b5ter/DisTwin/blob/main/Wiki/DiscordCommand_Boilerplate").

The simple section is the same as the Twitch one, the only different is that the Keys field dont work at all here. Becasue the discord bot sud not trigger keys on the streamers side. Would be really awkward and weird.


### Reedem Points
![ReedemP](http://wiad.tk/images/DisTwin/ReedemP.png)

Affiliate? This allows chat to reedem a reward and either press a key or play a audio file.

As with the Command, you will also see how many reedemable the bot act on. 

![Reed](http://wiad.tk/images/DisTwin/Reed.png)

Custom-reward-ID is the Redeem ID which can be found along with your channel points rewards.

### Currency
![Currency](http://wiad.tk/images/DisTwin/Currency.png)

Finnaly we come to currency, lets first hit the enable button to turn it green.
Sweet, now the currency is working for both bots. Theres one database which both bots are using, so the currency is always in sync.

![Cur](http://wiad.tk/images/DisTwin/Cur.png)

"Currency Icon", "Max currency limit" and "Insufficient currency response" are all not working on current version of program. So ignore these 3.

"MoneyTree" this is basicly for the admins of the currency system, if you place a name here they have basicly unlimited currency. This is used when you wanna give away free currency to chat or a person in chat. Holding events or simply a reaction to a discord message would also give those the set currency, however your name gotta be in to be able to use these commands.

### Settings
![Settings](http://wiad.tk/images/DisTwin/Settings.png)

Last but least is the settigns, im not gonna cover this to much. 

You will see status on each bit, if they are connected or not.

Path to the bots, if you used the program to install the bots it sud look somehow like the pic. 

Unchecking "Not show console in new window" will make the program open a console window when you start a bot. Output will be redirected directly to the new window, and no log will be made.




Uhhhhhhhhhhhhhhhh, was that all?

Oki, i think so. If theres anything your wondering about or confused about, dont hesitate to ask me^^

### Regards
Discord: lobster#5273
Twitch: loster31345


