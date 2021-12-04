const { HOLY_BACKEND } = require('./../../config.json');

class HoLYApi {
    constructor(){
    }

    static search(userId, name){
        let query = HOLY_BACKEND + `/channels?channel=${name}`
        let queryRes = [
            {
                "etag": "Okk4jmfJqMD_v6az82LFR59YsbY",
                "id": {
                    "channelId": "UCv3b_TjyZOhQw09fCr9rf2Q",
                    "kind": "youtube#channel"
                },
                "kind": "youtube#searchResult",
                "snippet": {
                    "channelId": "UCv3b_TjyZOhQw09fCr9rf2Q",
                    "channelTitle": "IDAVID29",
                    "description": "Si quieres pasar un buen rato con Gameplays Vídeos Random y unas buenas risas suscribete y estate al pendiente de nuevos videos :D Mi perfil de steam por ...",
                    "liveBroadcastContent": "upcoming",
                    "publishTime": "2014-09-26T23:39:02Z",
                    "publishedAt": "2014-09-26T23:39:02Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AKedOLTFhloeUBqbBNOIvGcqUiSBI9nBqPssmKZKEfXWAA=s88-c-k-c0xffffffff-no-rj-mo"
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AKedOLTFhloeUBqbBNOIvGcqUiSBI9nBqPssmKZKEfXWAA=s800-c-k-c0xffffffff-no-rj-mo"
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AKedOLTFhloeUBqbBNOIvGcqUiSBI9nBqPssmKZKEfXWAA=s240-c-k-c0xffffffff-no-rj-mo"
                        }
                    },
                    "title": "IDAVID29"
                }
            },
            {
                "etag": "8Oc6De9bsveuHb_4ongXJw2tfqA",
                "id": {
                    "channelId": "UC8beN0gTnCutGOySJ6k1QLg",
                    "kind": "youtube#channel"
                },
                "kind": "youtube#searchResult",
                "snippet": {
                    "channelId": "UC8beN0gTnCutGOySJ6k1QLg",
                    "channelTitle": "iDavid29",
                    "description": "",
                    "liveBroadcastContent": "upcoming",
                    "publishTime": "2012-09-02T18:32:23Z",
                    "publishedAt": "2012-09-02T18:32:23Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AKedOLRyZVDsupXoIbamedXpJXSAS9uf-u-pX5Nb-Q=s88-c-k-c0xffffffff-no-rj-mo"
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AKedOLRyZVDsupXoIbamedXpJXSAS9uf-u-pX5Nb-Q=s800-c-k-c0xffffffff-no-rj-mo"
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AKedOLRyZVDsupXoIbamedXpJXSAS9uf-u-pX5Nb-Q=s240-c-k-c0xffffffff-no-rj-mo"
                        }
                    },
                    "title": "iDavid29"
                }
            }
        ]
        return {
            data : queryRes
        }
    }

    static start(userId, channelIndex){
        const channelObject = this.sessions[userId].channels[channelIndex]
        const channelID = channelObject.id.channelId
        let query = HOLY_BACKEND + `/game?channelID=${channelID}`
        const queryRes = {
            "items": [
                {
                    "thumbnail": {
                        "default": {
                            "height": 90,
                            "url": "https://i.ytimg.com/vi/bxemsyxqK1Q/default.jpg",
                            "width": 120
                        },
                        "high": {
                            "height": 360,
                            "url": "https://i.ytimg.com/vi/bxemsyxqK1Q/hqdefault.jpg",
                            "width": 480
                        },
                        "medium": {
                            "height": 180,
                            "url": "https://i.ytimg.com/vi/bxemsyxqK1Q/mqdefault.jpg",
                            "width": 320
                        }
                    },
                    "title": "Gameplay modo de juego Saxton Hale Tf2",
                    "viewCount": "212"
                },
                {
                    "thumbnail": {
                        "default": {
                            "height": 90,
                            "url": "https://i.ytimg.com/vi/eKBuXUM5jXw/default.jpg",
                            "width": 120
                        },
                        "high": {
                            "height": 360,
                            "url": "https://i.ytimg.com/vi/eKBuXUM5jXw/hqdefault.jpg",
                            "width": 480
                        },
                        "medium": {
                            "height": 180,
                            "url": "https://i.ytimg.com/vi/eKBuXUM5jXw/mqdefault.jpg",
                            "width": 320
                        }
                    },
                    "title": "Reto#2 taunt kill con heavy TF2"
                },
                {
                    "thumbnail": {
                        "default": {
                            "height": 90,
                            "url": "https://i.ytimg.com/vi/h00qI0oD-Ho/default.jpg",
                            "width": 120
                        },
                        "high": {
                            "height": 360,
                            "url": "https://i.ytimg.com/vi/h00qI0oD-Ho/hqdefault.jpg",
                            "width": 480
                        },
                        "maxres": {
                            "height": 720,
                            "url": "https://i.ytimg.com/vi/h00qI0oD-Ho/maxresdefault.jpg",
                            "width": 1280
                        },
                        "medium": {
                            "height": 180,
                            "url": "https://i.ytimg.com/vi/h00qI0oD-Ho/mqdefault.jpg",
                            "width": 320
                        },
                        "standard": {
                            "height": 480,
                            "url": "https://i.ytimg.com/vi/h00qI0oD-Ho/sddefault.jpg",
                            "width": 640
                        }
                    },
                    "title": "Locura en server de team fortress 2 con amigos parte 2"
                },
                {
                    "thumbnail": {
                        "default": {
                            "height": 90,
                            "url": "https://i.ytimg.com/vi/6r2YqU6CUhg/default.jpg",
                            "width": 120
                        },
                        "high": {
                            "height": 360,
                            "url": "https://i.ytimg.com/vi/6r2YqU6CUhg/hqdefault.jpg",
                            "width": 480
                        },
                        "medium": {
                            "height": 180,
                            "url": "https://i.ytimg.com/vi/6r2YqU6CUhg/mqdefault.jpg",
                            "width": 320
                        },
                        "standard": {
                            "height": 480,
                            "url": "https://i.ytimg.com/vi/6r2YqU6CUhg/sddefault.jpg",
                            "width": 640
                        }
                    },
                    "title": "Tf2/Guia y tips para el scout Competitivo y Casual"
                }
            ],
            "msg": "started"
        }

        return {
            data : queryRes.items,
            rounds : 0
        }
    }

    static  guess(userId, guess){
        let query = HOLY_BACKEND + `/guess?answ=${guess}`
        return {}
    }
}

module.exports = {
    HoLYApi
}