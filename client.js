const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect',()=>{
  console.log('Connected to server...');
  conn.write('Name:boi');
  // setInterval(() => {
  //   conn.write('Move: up');
  // }, 500);
  
});
  conn.on('data', (data) => { //get message back from server
    console.log(data)
   });
  return conn;
}

module.exports = connect;