const axios = require('axios');
const {forecastCode} = require('../config');

var requestWeatherApiPms = (lat, lng) => {    
    var reqUrl = `https://api.darksky.net/forecast/${forecastCode}/${lat},${lng}`;

    return axios.get(reqUrl).then((response)=>{
        var body = response.data;

        if (!body || !body.latitude || !body.longitude) {
            throw `Unable to get the weather info.`;
        }
        return {
            timezone: body.timezone,
            summary: body.currently.summary,
            temperature: fahrenheit2Celsius(body.currently.temperature),
            apparentTemperature: fahrenheit2Celsius(body.currently.apparentTemperature)
        };
    }, (e)=>{
        throw `Unable to connect to Dark Sky servers.`;
    });
};

var fahrenheit2Celsius = (fah)=>{
    return (fah - 32) * 5 / 9;
};

module.exports = {
    requestWeatherApiPms
};