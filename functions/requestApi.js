const https = require('https');

module.exports.getFilmId = (key, filmToSearch) => {
    if (filmToSearch.length === 0) {
        return;
    }
    // https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
    https.get(`https://api.betaseries.com/movies/search?key=${key}&title=${filmToSearch}`, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(`${JSON.parse(data).movies[0].id} → ${filmToSearch}`);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
