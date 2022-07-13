let yargs = require("yargs");

let geocode = require("./APIs/geocode.js");
let weather = require("./APIs/Weather.js");

let argv = yargs
  .options({
    a: {
      description: "the address you wanna search for",
      demand: true,
      alias: "address",
      string: true,
    },
  })
  .help()
  .alias("help", "h").argv;

geocode.geocodeAddress(argv.a, (errorMsg, results) => {
  if (errorMsg) {
    console.log(errorMsg);
  } else {
    console.log(`${results.Address}`);
    weather.weatherData(
      results.Latitude,
      results.Longitude,
      (errorMsg, results) => {
        if (errorMsg) {
          console.log(errorMsg);
        } else {
          console.log(
            `The temp is ${results.Temp} and it's ${results.Weather}.`
          );
        }
      }
    );
  }
});
