const yargs = require('yargs');
const geoUtil = require('./api-util/geo-api');
const weatherUtil = require('./api-util/weather-api');

const argv = yargs
    .options({
        address: {
            describe: 'Address to fetch weather for',
            alias: ['a', 'addr'],
            demand: true,
            string: true
        }
    })
    .help().argv;

var address = argv.address;
console.log(`Queried address: ${address}`);
console.log(`Querying...`);

var geoResultObj;

geoUtil.requestGeoApiPms(address)
    .then((retObj)=>{
        geoResultObj = retObj;
        return weatherUtil.requestWeatherApiPms(geoResultObj.latitude, geoResultObj.longitude);
    })
    .then((weaResultObj)=>{
        printResult(geoResultObj, weaResultObj);
    })
    .catch((errMsg)=>{
        console.log(`Error! Msg=[${errMsg}]`);
    });

var formatTemperature = (n)=>{
    return `${Math.round(n * 100) / 100} °C`;
};

var printResult = (geoResultObj, weaResultObj) => {
    console.log(`Complete Address: ${geoResultObj.address}`);
    console.log(`Latitude: ${geoResultObj.latitude}`);
    console.log(`Longitude: ${geoResultObj.longitude}`);
    console.log(`Timezone: ${weaResultObj.timezone}`);
    console.log(`Weather Summary: ${weaResultObj.summary}`);
    console.log(`Temperature: ${formatTemperature(weaResultObj.temperature)}`);
    console.log(`Apparent Temperature: ${formatTemperature(weaResultObj.apparentTemperature)}`);
}
