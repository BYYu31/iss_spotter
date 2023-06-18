// index.js
const { fetchMyIP,fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
  return ip;
});

fetchCoordsByIP('162.218.124.121', (err, coord) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(coord);
});