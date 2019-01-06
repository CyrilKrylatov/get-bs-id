const https = require('https');
const fs = require('fs');

module.exports.getFilmId = (key, filmToSearch) => {
    if (filmToSearch.length === 0) {
        return;
    }

    let data = "";
    let i = 0;
    let parsedJsonData;
    let valueToReturn = "";

    fs.writeFile("./data/results.txt", "", (error) => {
        if (error) throw error;
    });

    // https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
    https.get(`https://api.betaseries.com/movies/search?key=${key}&title=${filmToSearch}`, (resp) => {

        // A chunk of data has been recieved.
        resp.on("data", (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
            parsedJsonDataMovies = JSON.parse(data).movies;
            parsedJsonDataMovies.forEach((value) => {
                valueToReturn = `${value.id} | ${value.title} → https://betaseries.com/film/${value.id}/${value.url}`;
                console.log(valueToReturn);
                fs.appendFile("./data/results.txt", `${valueToReturn}\n`, (error) => {
                    if (error) throw error;
                });
            });
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
