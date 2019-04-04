const axios = require('axios');
var colors = require('colors');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ac2a90a6be48d32c80f4bba03308233d&units=metric`);
    return `${resp.data.main.temp}`.green;
}





module.exports = {

    getClima

}