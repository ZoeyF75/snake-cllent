let connection;
const {up,down,left,right, snek, speed} = require('./constants');

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(input) {
  if (input ===  '\u0003') process.exit();
  if (input === 'w') connection.write(up);
  if (input === 's') connection.write(down);
  if (input === 'a') connection.write(left);
  if (input === 'd') connection.write(right);
  if (input === 'z') connection.write(snek);
  if (input === 'x') connection.write(speed);
};

module.exports = setupInput;