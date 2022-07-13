const request = require("request");

let weatherData = (lat, lon, callback) => {
  request(
    {
      url: `https://api.weatherapi.com/v1/current.json?key=7d099d44ddc74669af4101432220507&q=${lat},${lon}`,
      json: true,
    },
    (error, response, body) => {
      //   console.log(JSON.stringify(response, undefined, 2));
      if (error) {
        callback("unable to connect to the servers");
      } else if (response.statusCode === 400) {
        callback("unable to find that address");
      } else if (response.statusCode === 200) {
        callback(undefined, {
          Weather: body.current.condition.text,
          Temp: body.current.temp_c,
        });
      }
    }
  );
};

module.exports = {
  weatherData,
};
