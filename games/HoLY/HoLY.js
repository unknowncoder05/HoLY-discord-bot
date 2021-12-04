const { search, start, guess } = require('./api')

sessions = {}

function HoLVideosMessage(prevVideo, newVideo){
    let response = []
    const prevVideoEmbed = {
        color: 0x0099ff,
        title: prevVideo.title,
        fields: [
            {
                name: 'View Count',
                value: `${prevVideo.viewCount}`,
            },
        ],
        thumbnail: {
            url: prevVideo.thumbnail.medium.url,
        },
    }
    response.push({ embeds: [prevVideoEmbed] })

    const newVideoEmbed = {
        color: 0x0099ff,
        title: newVideo.title,
        thumbnail: {
            url: newVideo.thumbnail.medium.url,
        },
        description: 'Is this Higuer or Lower?'
    }
    response.push({ embeds: [newVideoEmbed] })
    return response
}

function ErrorMessage(errMsg){
    const errorMsgEmbed = {
        color: 0x0099ff,
        title: 'ERROR',
        description: errMsg,
    }

    return { embeds: [errorMsgEmbed] }
}

const guessOptions = {
    higuer: 1,
    lower: 0,
}

const guessResultOptions = {
    'wrong guess': 'Wrong Guess',
    'right': 'Right Guess',
    'game over': 'Game Over'
}


class HoLYApp {
    static async search(args, kwargs) {
        let channels = await search(kwargs.userId, args[0])
        console.log("CHANNELS", channels)
        let response = []
        
        for(let channel of channels.data){
            const channelEmbed = {
                color: 0x0099ff,
                title: `**${channel.snippet.channelTitle}**`,
                url: channel.snippet.thumbnails.medium.url,           
                description: channel.snippet.description || '**No Description**',
                thumbnail: {
                    url: channel.snippet.thumbnails.medium.url,
                },
                image: {
                    url: channel.snippet.thumbnails.medium.url,
                },
                timestamp: new Date(),
                fields: [
                    {
                        name: 'Channel Id',
                        value: `${channel.id.channelId}`,
                    },
                ]
                
            }
            response.push({ embeds: [channelEmbed] })
        }
        return response
    }

    static async start(args, kwargs) {

        if(kwargs.userId in sessions){
            return ErrorMessage('You are already in a Game')
        }

        let videos = await start(kwargs.userId, args[0])

        if(videos.msg && videos.msg === 'game already started'){
            return ErrorMessage('You are already in a Game')
        }

        sessions[kwargs.userId] = {
            videos: videos.data,
            round: 0
        }

        
        return HoLVideosMessage(videos.data[0], videos.data[1])
    }

    static async guess(args, kwargs) {

        if(!(kwargs.userId in sessions)){
            return ErrorMessage('User has no open Game')
        }

        if(!(args[0].toLowerCase() in guessOptions)){
            return ErrorMessage('Not a valid guess')
        }

        let cleanGuess = guessOptions[args[0].toLowerCase()]
        let guessResult = await guess(kwargs.userId, cleanGuess)

        // game is over
        if(guessResult.data.msg == 'game over'){
            const gameOverMsgEmbed = {
                color: 0x0099ff,
                title: `**${guessResultOptions[guessResult.msg]}**`,
                fields: [
                    {
                        name: 'Lives',
                        value: `0`,
                    },
                    {
                        name: 'Views',
                        value: `${guessResult.views}`,
                    },
                    {
                        name: 'Round Number',
                        value: `${guessResult.round}`,
                    },
                ]
                
            }
            //remove session
            delete  sessions[kwargs.userId]
            return { embeds: [gameOverMsgEmbed] }
        }

        // load next videos
        if(guessResult.data.next_page){
            sessions[kwargs.userId].videos = [ ...sessions[kwargs.userId].videos, ...guessResult.data.next_page]
        }

        // update session
        sessions[kwargs.userId].round = guessResult.data.round
        // update current video
        sessions[kwargs.userId].videos[guessResult.data.round].viewCount = guessResult.data.views

        let response = []
        const guessResultEmbed = {
            color: 0x0099ff,
            title: `**${guessResultOptions[guessResult.data.msg]}**`,
            fields: [
                {
                    name: 'Lives',
                    value: `${guessResult.data.lives}`,
                },
                {
                    name: 'Views',
                    value: `${guessResult.data.views}`,
                },
                {
                    name: 'Round Number',
                    value: `${guessResult.data.round}`,
                },
            ]
            
        }
        response.push({ embeds: [guessResultEmbed] })
        let nextRoundMessages = HoLVideosMessage(sessions[kwargs.userId].videos[guessResult.data.round], sessions[kwargs.userId].videos[guessResult.data.round+1])
        response = [ ...response, ...nextRoundMessages]
        return response
    }
}


module.exports = {
    HoLYApp
}