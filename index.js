const { fetchMyIP, fetchCoordsByIP } = require("./iss.js");

// fetchMyIP((error, IP) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(IP);
//     return IP;
//   }
// });

fetchCoordsByIP(ip, (error, coordinates) => {
  if (error) {
    console.log(error);
  } else {
    console.log(coordinates);
  }
});

// console.log(
//   fetchMyIP((error, IP) => {
//     if (error) {
//       console.log(error);
//     } else {
//       // console.log(IP);
//       return IP;
//     }
//   })
// );
