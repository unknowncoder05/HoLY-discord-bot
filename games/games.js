const { HoLYApp } = require('./HoLY/HoLY')

const Games = {
	HoLY: {
		name: "Higuer or Lower Youtube",
		commands: {
            search : HoLYApp.search,
            start : HoLYApp.start,
            guess : HoLYApp.guess,
            next : HoLYApp.next,
        }
	}
}

module.exports = {
    Games
}