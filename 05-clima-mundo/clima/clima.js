const axios   = require('axios');
const apiKey  = require('../config/apiKey.json')[0].apiKey;

const getClima = async(lat, lng) => {

  let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ apiKey }`)

  return resp.data.main.temp;
}

module.exports = {
  getClima
}
