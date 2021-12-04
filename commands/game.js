const { SlashCommandBuilder } = require('@discordjs/builders');
const { Games } = require('../games/games') 


function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}


module.exports = {
	data: new SlashCommandBuilder()
		.setName('game')
		.setDescription('Start a game'),
	async execute(message) {
		const commandParameters = message.content.split(" ").slice(1);

		// if not a game
		if (commandParameters.length == 0){
			let gamesString = Object.keys(Games).join('\n')
			await message.reply('Select a Game!\n'+gamesString);
			return
		}

		// if not a valid game
		if (!(commandParameters[0] in Games)){
			let gamesString = Object.keys(Games).join('\n')
			await message.reply('Select a **Valid** Game!\n'+gamesString);
			return
		}

		// if not command
		if (commandParameters.length < 2){
			let gamesString = Object.keys(Games[commandParameters[0]].commands).join('\n')
			await message.reply('Select a game command:\n'+gamesString);
			return
		}

		// if not a valid command
		if (!(commandParameters[1] in Games[commandParameters[0]].commands)){
			let gamesString = Object.keys(Games[commandParameters[0]].commands).join('\n')
			await message.reply('Select a **valid** game command:\n'+gamesString);
			return
		} else { // if valid command
			let commandResponse = await Games[commandParameters[0]].commands[commandParameters[1]](
				commandParameters.slice(2),
				{
					userId: message.author.id
				}
			)

			if(isArray(commandResponse)){
				for(commandResponseMessage of commandResponse){
					await message.reply(commandResponseMessage);
				}
			} else {
				await message.reply(commandResponse);
			}
			return
		}
	},
};