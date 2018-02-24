const request = require('request');

var requestGeoApi = (address, cbk) => {
    var reqObj = {
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
        json: true
    };

    request(reqObj, (error, response, body) => {
        if (error) {
            cbk(`Unable to connect to Google servers.`);
            return;
        }
        if (body.status === 'ZERO_RESULTS') {
            cbk(`Unable to find that address.`);
            return;
        }
        if (body.status === 'OK') {
            cbk(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng,
            });
            return;
        }
        cbk(`Unexcepted Failed!! [${body.status}]`);
    });
};

module.exports = {
    requestGeoApi
}
