# Module: axios

> * Intro: 基於 Promise 設計的 Http Request tools
> * Type: 3rd-party
> * Document: [npm - axios](https://www.npmjs.com/package/axios)
> * Requiring syntax: `const axios = require('axios');`

<a name="toc"></a>

## TOC
* [Get Method Example](#get-method-example)

---

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="get-method-example"></a>

## Get Method Example

Example:
````js
console.log('app start');

const axios = require('axios');

var addrEncoded = encodeURIComponent('Taipei 101');
var apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addrEncoded}`; // OK Case
//var apiUrl = 'https://oplkk'; //Failed Case

axios.get(apiUrl).then((response)=>{
    console.log('* response.statusText:', response.statusText);
    console.log('* response.status:', response.status);
    console.log('* response.data:', response.data);
}).catch((e)=>{
    console.log(`e.message=[${e.message}]`);    
});

console.log('app end');
````

Result(OK Case):
````
app start
app end
* response.statusText: OK
* response.status: 200
* response.data: { results:
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
e.message=[getaddrinfo ENOTFOUND oplkk oplkk:443]
````
