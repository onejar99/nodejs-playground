console.log('app start');

var somePromise = new Promise((resolveCbk, rejectCbk)=>{
    console.log('Promise code starting');

    resolveCbk('Hey, it worked!', 'OK001'); // only the first one of resolve or reject works
    resolveCbk('Hey, it worked! 2'); // not work
    rejectCbk('Oh no~ not work!'); // not work

    console.log('Promise code ending');
});

console.log('app break point 1');
console.log('somePromise=', somePromise); // somePromise= Promise { 'Hey, it worked!' }

somePromise.then((msg, code)=>{  // code is undefined
    console.log(`Success: ${msg} (${code})`);
}, (msg)=>{
    console.log(`Failure: ${msg}`);
});

console.log('app end');
