const axios = require('axios');

const getClima = async(lat, lng) => {

  let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=2329fa8399bff48bcc67973ba7d8929b`)

  return resp.data.main.temp;
}

module.exports = {
  getClima
}
