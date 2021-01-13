const net = require('net');
const {host,port} = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host,port
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect',()=>{
  console.log('Connected to server...');
  conn.write('Name: boi');

});
  conn.on('data', (data) => { //get message back from server
    console.log(data)
   });
  return conn;
}

module.exports = connect;