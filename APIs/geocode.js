let request = require("request");

let geocodeAddress = (address, callback) => {
  let encodedAddress = encodeURIComponent(address); //encoded version of the address for example 1301%20lombard%20street%20philadelphia'
  request(
    {
      url: `http://api.positionstack.com/v1/forward?access_key=7268e85238a9e37ecf7d8e51da824155&query=${encodedAddress}`,
      json: true,
    },
    function (error, response, body) {
      // console.log(response);
      // console.log(JSON.stringify(response, undefined, 2));
      if (error) {
        callback("unable to connect to PositionStack server");
      } else if (body.data.length === 0) {
        callback("unable to find that address");
      } else if (body.data.length !== 0) {
        callback(undefined, {
          Address: body.data[0].label,
          Latitude: body.data[0].latitude,
          Longitude: body.data[0].longitude,
        });
      }
    }
  );
};

module.exports = {
  geocodeAddress,
};
