const { MessageEmbed } = require('discord.js');
const { HoLYApp } = require('./HoLY/HoLY')

const holy = new HoLYApp()

const Games = {
	HoLY: {
		name: "Higuer or Lower Youtube",
		commands: {
            search : holy.search,
            start : holy.start,
            guess : holy.guess,
        }
	}
}

module.exports = {
    Games
}