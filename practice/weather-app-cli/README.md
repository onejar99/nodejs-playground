# Weather App (CLI)

A weather querying App with Command Line Interface.

## Key Points

1. Using `Google Geo API` to query location information.
1. Using `Dark Sky API` to query weather information.
1. Using modules:
    * `yargs` to parse command arguments
    * `request` to make http calls
1. Note: For using `Dark Sky API`, you need to sign up and get your own access code. Then create a file `config.js` as shown to run this project.

`src/config.js`:
````js
const forecastCode = '(your-forecast-api-access-code)';

module.exports = {
    forecastCode
};
````

## Run
`$ cd src`

`$ node app.js --addr 'Taipei 101'`
````
Queried address: Taipei 101
Querying...
Complete Address: Taipei 101, No. 7, Section 5, Xinyi Road, Xinyi District, Taipei City, Taiwan 110
Latitude: 25.0339639
Longitude: 121.5644722
Timezone: Asia/Taipei
Weather Summary: Partly Cloudy
Temperature: 16.47 °C
Apparent Temperature: 16.56 °C
````

`$ node app.js --addr 'Marina bay sands'`
````
Queried address: Marina bay sands
Querying...
Complete Address: 10 Bayfront Avenue, Singapore 018956
Latitude: 1.2833754
Longitude: 103.8607264
Timezone: Asia/Singapore
Weather Summary: Humid and Partly Cloudy
Temperature: 26.05 °C
Apparent Temperature: 27.99 °C
````

`$ node app.js -a ooooooo`
````
Queried address: ooooooo
Querying...
Error! Msg=[Unable to find that address.]
````

## Other Reference
* Google Geo API
    * E.g. https://maps.googleapis.com/maps/api/geocode/json?address=Taipe101
* [Weather API: Dark Sky(forecast.io)](https://darksky.net/)
    * [Dark Sky API - Developer](https://darksky.net/dev)
    * E.g. https://api.darksky.net/forecast/{your-forecast-api-access-code}/37.8267,-122.4233
