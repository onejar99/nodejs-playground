const request = require('request');
const {forecastCode} = require('../config');

var requestWeatherApi = (lat, lng, cbk) => {
    var reqObj = {
        url: `https://api.darksky.net/forecast/${forecastCode}/${lat},${lng}`,
        json: true
    };

    request(reqObj, (error, response, body) => {
        if(error){
            cbk(`Unable to connect to Dark Sky servers.`);
            return;
        }
        if (!body || !body.latitude || !body.longitude) {
            cbk(`Unable to get the weather info.`);
            return;
        }
        cbk(undefined, {
            timezone: body.timezone,
            summary: body.currently.summary,
            temperature: fahrenheit2Celsius(body.currently.temperature),
            apparentTemperature: fahrenheit2Celsius(body.currently.apparentTemperature)
        });
    });
};

var fahrenheit2Celsius = (fah)=>{
    return (fah - 32) * 5 / 9;
};

module.exports = {
    requestWeatherApi
};