console.log('app start');

const sleep = require('sleep');

var somePromise = new Promise((resolveCbk, rejectCbk)=>{
    console.log('Promise code starting');

    setTimeout(()=>{
        console.log('async call start!');

        resolveCbk('Hey, it worked!'); // only the first one of resolve or reject works
        resolveCbk('Hey, it worked!'); // not work
        rejectCbk('Unable to fulfill promise.'); // not work

        sleep.sleep(5);

        console.log('async call over!'); // remaining code still work
    }, 2000);

    console.log('Promise code ending');
});

console.log('app break point 1');
console.log('somePromise=', somePromise); // Promise {<pending>}

somePromise.then((msg)=>{
    console.log(`Success: ${msg}`);
}, (msg)=>{
    console.log(`Failure: ${msg}`);
});

sleep.sleep(5);

console.log('somePromise=', somePromise);

console.log('app start');