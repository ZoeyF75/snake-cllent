const connect = require('./client');
const input = require('./input');
const setupInput = input.setupInput;

console.log('Connecting ...');
setupInput(connect());

