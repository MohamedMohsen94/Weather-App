const request = require("request");

let geoCodeAddress = (address) => {
  let encodedAddress = encodeURIComponent(address);
  
  return new Promise((resolve, reject) => {
    request(
      {
        url: `http://api.positionstack.com/v1/forward?access_key=7268e85238a9e37ecf7d8e51da824155&query=${encodedAddress}`,
        json: true,
      },
      (error, response, body) => {
        if (error) {
          reject("unable to connect to PositionStack server");
        } else if (body.data.length === 0) {
          reject("unable to find that address");
        } else if (body.data.length !== 0) {
          resolve({
            Address: body.data[0].label,
            Latitude: body.data[0].latitude,
            Longitude: body.data[0].longitude,
          });
        }
      }
    );
  });
};

geoCodeAddress("19147").then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);
