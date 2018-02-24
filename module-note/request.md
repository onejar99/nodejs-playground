# Module: request

> * Intro: Simple way to make asynchronous Http calls 
> * Type: 3rd-party
> * Document: [npm - request](https://www.npmjs.com/package/request)
> * Requiring syntax: `const request = require('request');`

## TOC
* [Basic example](#basic-example)

---

<a name="basic-example"></a>

## Basic example

Example:
````js
console.log('app start');

const request = require('request');

var addrEncoded = encodeURIComponent('Taipei 101');
var apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addrEncoded}`; // OK Case
//var apiUrl = 'https://oplkk'; //Failed Case

var reqObj = {
    url: apiUrl,
    json: true // transform response.body to JSON object (default is "string") 
};

request(reqObj, (error, response, body) => {
    console.log('* error:', error); // Print the error if one occurred (null if not error)
    console.log('* statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('* typeof body:', typeof body);
    console.log('* body:', body); // Print the HTML for the Google homepage.
});

console.log('app end');
````

Result(OK Case):
````
app start
app end
* error: null
* statusCode: 200
* typeof body: object
* body: { results:
   [ { address_components: [Array],
       formatted_address: 'Taipei 101, No. 7, Section 5, Xinyi Road, Xinyi District, Taipei City, Taiwan 110',
       geometry: [Object],
       place_id: 'ChIJH56c2rarQjQRphD9gvC8BhI',
       types: [Array] } ],
  status: 'OK' }
````

Result(Failed Case):
````
app start
app end
* error: { Error: getaddrinfo ENOTFOUND oplkk oplkk:443
    at errnoException (dns.js:50:10)
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:92:26)
  code: 'ENOTFOUND',
  errno: 'ENOTFOUND',
  syscall: 'getaddrinfo',
  hostname: 'oplkk',
  host: 'oplkk',
  port: 443 }
* statusCode: undefined
* typeof body: undefined
* body: undefined
````
