const request = require('request');

var requestGeoApiPms = (address) => {
    var reqObj = {
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
        json: true
    };

    return new Promise((resolve, reject)=>{
        request(reqObj, (error, response, body) => {
            if (error) {
                reject(`Unable to connect to Google servers.`);
                return;
            }
            if (body.status === 'ZERO_RESULTS') {
                reject(`Unable to find that address.`);
                return;
            }
            if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng,
                });
                return;
            }
            reject(`Unexcepted Failed!! [${body.status}]`);
        });
    });

    
};

module.exports = {
    requestGeoApiPms
}
