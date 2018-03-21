/***********************************************************************
 *  async function and promise encapsulater
 ***********************************************************************/ 
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


/***********************************************************************
 *  await
 ***********************************************************************/ 
const getIntro_promise1 = ()=>{
    return getNameResolve().then((name)=>{
        return name;
    });
};

const getIntro_promise2 = async ()=>{
    var name = await getNameResolve();
    return name;
};

const getIntro_promise3 = async ()=>{
    var name = await getNameReject();
    return name;
};

const getIntro_async1 = ()=>{
    return getNameAsyncOk().then((name)=>{
        return name;
    });
};

const getIntro_async2 = async ()=>{
    var name = await getNameAsyncOk();
    return name;
};

const getIntro_async3 = async ()=>{
    var name = await getNameAsyncError();
    return name;
};

/***********************************************************************
 *  Run
 ***********************************************************************/ 
runExample('promise1', getIntro_promise1);
runExample('promise2', getIntro_promise2);
runExample('promise3', getIntro_promise3);
runExample('async1', getIntro_async1);
runExample('async2', getIntro_async2);
runExample('async3', getIntro_async3);

function runExample(exTitle, cbk){
    cbk().then((name)=>{
        console.log(`${exTitle}=`, name);
    }).catch((e)=>{
        console.log(`${exTitle}=`,e);
    });
}
