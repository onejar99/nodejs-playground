const axios = require('axios');

var requestGeoApiPms = (address) => {
    var reqUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`;

    return axios.get(reqUrl).then((response)=>{
        var body = response.data;
    
        if (body.status === 'ZERO_RESULTS') {
            throw `Unable to find that address.`;
        }
        if (body.status === 'OK') {
            return {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng,
            };
        }
        throw `Unexcepted Failed!! [${body.status}]`;
    }, (e)=>{
        throw `Unable to connect to Google servers.`;
    });
};

module.exports = {
    requestGeoApiPms
}
