const { nextISSTimesForMyLocation } = require("./iss.js");

nextISSTimesForMyLocation((error, flyOverTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  // success, print out the deets!
  print(flyOverTimes);
});

const print = (flyOverTimes) => {
  for (const pass of flyOverTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
