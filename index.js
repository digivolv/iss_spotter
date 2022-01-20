const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
} = require("./iss.js");

// fetchMyIP((error, IP) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(IP);
//     return IP;
//   }
// });

// fetchCoordsByIP(ip, (error, coordinates) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(coordinates);
//   }
// });

// fetchISSFlyOverTimes([43.6655, -79.4204], (error, flyOverTimes) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(flyOverTimes);
//   }
// });
