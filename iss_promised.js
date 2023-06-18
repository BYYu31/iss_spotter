// iss_promised.js

const request = require('request-promise-native');

const fetchMyIP = () => request('https://api.ipify.org?format=json');

// iss_promised.js: 

// ...

/* 
 * Makes a request to ipwho.is using the provided IP address to get its geographical information (latitude/longitude)
 * Input: JSON string containing the IP address
 * Returns: Promise of request for lat/lon
 */
const fetchCoordsByIP = body => {
  const parsedBody = JSON.parse(body);
  return request(`http://ipwho.is/${parsedBody.ip}`);
}

const fetchISSFlyOverTimes = coords => {
  const parseCoords = JSON.parse(coords);
  const { latitude, longitude } = parseCoords;
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(data => {
      const { response } = JSON.parse(data);
      return response;
    })
}

module.exports = { nextISSTimesForMyLocation };
