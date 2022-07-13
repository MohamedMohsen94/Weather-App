let yargs = require("yargs");
let axios = require("axios");

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

let encodedAddress = encodeURIComponent(argv.address);

let Url = `http://api.positionstack.com/v1/forward?access_key=7268e85238a9e37ecf7d8e51da824155&query=${encodedAddress}`;

axios
  .get(Url)
  .then((response) => {
    if (response.data.data.length === 0) {
      throw new Error("unable to find that address");
    }
    let lat = response.data.data[0].latitude;
    let lon = response.data.data[0].longitude;
    let weatherUrl = `https://api.weatherapi.com/v1/current.json?key=7d099d44ddc74669af4101432220507&q=${lat},${lon}`;
    console.log(response.data.data[0].label);
    return axios.get(weatherUrl);
  })
  .then((response) => {
    let Temp = response.data.current.temp_c;
    let TempStat = response.data.current.condition.text;
    console.log(`The temp is ${Temp} and it's ${TempStat}.`);
  })
  .catch((error) => {
    if (error.code === "ENOTFOUND") {
      console.log("Unable to connect to the api servers");
    } else {
      console.log(error.message);
      4;
    }
  });
