const fs = require('fs');

module.exports.getArray = (file) => {
    // https://stackoverflow.com/a/6832105
    const arrayFilms = fs.readFileSync(file).toString().split("\n");
    return arrayFilms;
}
