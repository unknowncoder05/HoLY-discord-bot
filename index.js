const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
const { token, prefix, CLIENT_ID, GUILD_ID } = require('./config.json');



// Initialize client and define intents
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


// Initialize command collection and load commands from ./commands directory
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// Load all events from ./events directory and add them to client
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}


// Add default event on messageCreate and its basic handling
client.on('messageCreate', async message  => {
	if (!message.content.startsWith(prefix)) return;

	const commandName = message.content.split(" ")[0].slice(prefix.length);
	console.log(`commandCall: ${commandName}; caller: ${message.author.username}`)
	
	if (!client.commands.has(commandName)){
		await message.reply({ content: 'Not a command I know of', ephemeral: true });
		return;
	}

	try {
		await client.commands.get(commandName).execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// Login client with the bot token
client.login(token);
