#!/usr/bin/env node

const config = require('./config/config.js');
const fileToArray = require('./functions/fileToArray');
const requestApi = require('./functions/requestApi');

const arrayFilms = fileToArray.getArray(config.filmsFile);

for (film in arrayFilms) {
    requestApi.getFilmId(config.apiKey, arrayFilms[film])
}
