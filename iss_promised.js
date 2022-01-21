const request = require("request-promise-native");

const nextISSTimesForMyLocation = function () {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      const { response } = JSON.parse(body);
      return response;
    });
};

const fetchMyIP = function () {
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIP = function (body) {
  body = JSON.parse(body);
  return request(`https://freegeoip.app/json/${body.ip}`);
};

const fetchISSFlyOverTimes = function (body) {
  body = JSON.parse(body);
  return request(
    `https://iss-pass.herokuapp.com/json/?lat=${body.longitude}&lon=${body.latitude}`
  );
};

module.exports = { nextISSTimesForMyLocation };
