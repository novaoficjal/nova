const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const config = require('./config.json');
const client = new SteamUser();


const logOnOptions = {
	accountName: config.username,
	password: config.password,
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
	console.log('succesfully logged on.');
	client.setPersona(SteamUser.Steam.EPersonaState.Online);
	client.gamesPlayed(["Custom Game",440]);
});

client.on("friendMessage", function(steamID, message) {
	if (message == "hi") {
		client.chatMessage(steamID, "hello, this works.");
	}
});
