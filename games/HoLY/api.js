const axios = require("axios");

const { HOLY_BACKEND } = require('./../../config.json');


async function search(userId, channelName){
    let url = `${HOLY_BACKEND}/${userId}/channels?channel=${channelName}`
    let queryRes = (await axios.get(url)).data
    return {
        data : queryRes
    }
}

async function start(userId, channelId){
    let url = `${HOLY_BACKEND}/${userId}/game?channel_id=${channelId}`
    let queryRes = (await axios.get(url)).data
    
    return {
        data : queryRes.items,
        msg: queryRes.msg
    }
}

async function guess(userId, guess){
    let url = `${HOLY_BACKEND}/${userId}/guess?answer=${guess}`
    let queryRes = (await axios.get(url)).data
    return {
        data: queryRes
    }
}


module.exports = {
    search, start, guess
}