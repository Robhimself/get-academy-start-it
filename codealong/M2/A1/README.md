Lag view og controller funksjoner til denne modellen

        // Kunne liste opp spillene, legge til og slette et spill i listen.
        const model = {
            app: {
                currentPage: "Toplist"
            },

            inputs: {
                newGame: {
                    title: '', onlinePlayers: '', launchYear: 0
                }
            },

            data: {
                games: [
                    { title: "Player’s Unknown Battle Ground (PUBG)", onlinePlayers: "50 million", launchYear: 2018 },
                    { title: "Fortnite Battle Royale", onlinePlayers: "50 million", launchYear: 2017 },
                    { title: "Apex Legends", onlinePlayers: "50 million(1 Month)", launchYear: 2019 },
                    { title: "Leauge of Legends (LOL)", onlinePlayers: "27 million", launchYear: 2009 },
                    { title: "Counter Strike; Global Offensive", onlinePlayers: "32 million", launchYear: 2014 },
                    { title: "Heartstone", onlinePlayers: "29 million", launchYear: 2012 },
                    { title: "Minecraft", onlinePlayers: "91 million", launchYear: 2011 },
                    { title: "DOTA 2", onlinePlayers: "5 million", launchYear: 2015 },
                    { title: "The Division 2", onlinePlayers: "N/A", launchYear: 2019 },
                    { title: "The Splatoon 2", onlinePlayers: "5 million", launchYear: 2015 },
                ]
            }
        }
