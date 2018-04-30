const request = require('request');
const {forecastCode} = require('../config');

var requestWeatherApiPms = (lat, lng) => {
    var reqObj = {
        url: `https://api.darksky.net/forecast/${forecastCode}/${lat},${lng}`,
        json: true
    };

    return new Promise((resolve, reject)=>{
        request(reqObj, (error, response, body) => {
            if(error){
                reject(`Unable to connect to Dark Sky servers.`);
                return;
            }
            if (!body || !body.latitude || !body.longitude) {
                reject(`Unable to get the weather info.`);
                return;
            }
            resolve({
                timezone: body.timezone,
                summary: body.currently.summary,
                temperature: fahrenheit2Celsius(body.currently.temperature),
                apparentTemperature: fahrenheit2Celsius(body.currently.apparentTemperature)
            });
        });
    });
};

var fahrenheit2Celsius = (fah)=>{
    return (fah - 32) * 5 / 9;
};

module.exports = {
    requestWeatherApiPms
};