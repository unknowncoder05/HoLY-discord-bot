const { HoLYApi } = require('./api')

class HoLYApp {
    constructor(){
        this.sessions = {}
    }
    async search(args, kwargs) {
        let channels = await HoLYApi.search(kwargs.userId, args[0]).data
        let response = []
        
        for(let channel of channels){
            const channelEmbed = {
                color: 0x0099ff,
                title: channel.snippet.channelTitle,
                url: channel.snippet.thumbnails.medium.url,           
                description: channel.snippet.description || '**No Description**',
                thumbnail: {
                    url: channel.snippet.thumbnails.medium.url,
                },
                image: {
                    url: channel.snippet.thumbnails.medium.url,
                },
                timestamp: new Date(),
            }
            response.push({ embeds: [channelEmbed] })
        }
        return response
    }
}


module.exports = {
    HoLYApp
}