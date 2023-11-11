const readline = require('readline');
const { showOptions } = require('./userInterface.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Iniciar el programa
showOptions(rl);

