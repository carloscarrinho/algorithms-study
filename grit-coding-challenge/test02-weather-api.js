const axios = require("axios");
// require("./callMock");

async function cityWeather(city) {
  // case 01 - throw an error if input is not a string:
  if (typeof city != "string") throw Error("not a string");

  // case 02: throw an error if input is an empty string:
  if (city === "") throw Error("string is empty");

  try {
    // case 03 - throw an error if City was not found on API:
    const url = `https://example.com/data/2.5/weather?units=metric&q=${city}`;
    const response = await axios.get(url);
    if (response.status != 200) throw Error("city not found");
  
    // case 04 - return wheather if it was found on API:
    return {
      temp: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      temp_min: response.data.main.temp_min,
      temp_max: response.data.main.temp_max,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
    };
  } catch (error) {
    console.log('error >> ', error.response.status);
    throw Error("catched");
  }
}

cityWeather("Tokyo");
