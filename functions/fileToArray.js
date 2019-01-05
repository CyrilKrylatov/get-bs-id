module.exports.getArray = (file) => {
    const fs = require('fs');
    // https://stackoverflow.com/a/6832105
    const arrayFilms = fs.readFileSync(file).toString().split("\n");
    return arrayFilms;
}
