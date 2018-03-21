// 1. no promise, no async
const getName = ()=>{
    return 'Mike';
};

// 2-a. promise: resolve
const getNameResolve = ()=>{
    return new Promise((resolve, reject)=>{
       resolve('Mike'); 
    });
};

// 2-b. promise: reject
const getNameReject = ()=>{
    return new Promise((resolve, reject)=>{
       reject('Oops! Error~'); 
    });
};

// 3-a. async: resolve (equal to getNameResolve())
const getNameAsyncOk = async ()=>{
    return 'Mike';
};

// 3-b. async: reject (equal to getNameReject())
const getNameAsyncThrow = async ()=>{
    throw 'Oops! Error~';
};

// 3-c. async: reject (similar to getNameAsyncThrow())
const getNameAsyncError = async ()=>{
    throw new Error('Oops! Error~');
};

// Run
var x;
console.log('getName()=', x = getName());         // Mike
console.log('getNameResolve()=', x = getNameResolve()); // Promise { [[PromiseStatus]]:"resolved", [[PromiseValue]]:"Mike" }
console.log('getNameAsyncOk()=', x = getNameAsyncOk());    // Promise { [[PromiseStatus]]:"resolved", [[PromiseValue]]:"Mike" }
console.log('getNameReject()=', x = getNameReject());         // Promise { [[PromiseStatus]]:"rejected", [[PromiseValue]]:"Oops! Error~" }
console.log('getNameAsyncThrow()=', x = getNameAsyncThrow());         // Promise { [[PromiseStatus]]:"rejected", [[PromiseValue]]:"Oops! Error~" }
console.log('getNameAsyncError()=', x = getNameAsyncError());         // Promise { [[PromiseStatus]]:"rejected", [[PromiseValue]]:"Error: Oops! Error~" }
