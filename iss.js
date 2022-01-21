const request = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = (callback) => {
  // use request to fetch IP address from JSON API
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const data = JSON.parse(body);
      callback(null, data.ip);
    }
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
    }
    const data = JSON.parse(body);
    const { longitude, latitude } = data;
    callback(null, { longitude, latitude });
  });
};

const fetchISSFlyOverTimes = (coordinates, callback) => {
  request(
    `https://iss-pass.herokuapp.com/json/?lat=${coordinates.longitude}&lon=${coordinates.latitude}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
      }
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        callback(Error(msg), null);
      }
      const data = JSON.parse(body);
      // console.log("datatata", data.response);
      callback(null, data.response);
    }
  );
};

const nextISSTimesForMyLocation = (callback) => {
  fetchMyIP((error, IP) => {
    if (error) {
      console.log(error);
    }
    // else {
    //   console.log(`Your IP is: ${IP}`);
    // }

    fetchCoordsByIP(IP, (error, coordinates) => {
      if (error) {
        console.log(error);
      }
      // else {
      //   console.log(
      //     `Your coodinates are: longitude:${coordinates.longitude}, latitude: ${coordinates.latitude}, `
      //   );
      // }
      fetchISSFlyOverTimes(coordinates, (error, flyOverTimes) => {
        if (error) {
          console.log(error);
        }
        callback(null, flyOverTimes);

        // else {
        //   for (const time of flyOverTimes[0]) {
        //     console.log(time);
        //   }
        // }
      });
    });
  });
};

module.exports = {
  nextISSTimesForMyLocation,
};
