#!/usr/bin/env node

const config = require('./config/config');

const [,, ...args] = process.argv;

console.log(`Hello World ${config.apiKey} ${args}`);
