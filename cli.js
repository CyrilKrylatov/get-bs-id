#!/usr/bin/env node

const config = require('./config/config.js');
const fileToArray = require('./functions/fileToArray');

const arrayFilms = fileToArray.getArray(config.filmsFile);

console.log(arrayFilms);
