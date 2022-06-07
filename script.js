const gamingApp = {};

gamingApp.url = 'https://api.rawg.io/api/games';
gamingApp.infoUrl = 'https://api.rawg.io/api/games/{id}';

gamingApp.apiKey = 'd07f35abd3f241b28dd811332c24aff7'

gamingApp.getGames = () => {

    // create a url variable using the new URL syntax
    // this will return a newly created URL object - console.log() it! 
    const url = new URL(gamingApp.url);
    // target the "search" property of this object
    // we will define the parameters we want as an object with the new URLSearchParams syntax
    url.search = new URLSearchParams({
        key: gamingApp.apiKey,
        search: 'gta V',
        page_size: 1,

    });

    fetch(url)
        .then((data) => {
            return data.json();
        }).then((jsonData) => {
            const gameId = jsonData.results[0].id

            url.search = new URLSearchParams({
                key: gamingApp.apiKey,
                id: gameId,
            });
            fetch(url)
                .then((data) => {
                    return data.json();
                }).then((jsonData) => {
                    console.log(jsonData.results[0])
                })


        })





}

gamingApp.getGames();





