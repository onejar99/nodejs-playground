var addPromise = (n1, n2) => {
    return new Promise((resolve, reject)=>{
        if(typeof n1 === 'number' && typeof n2 === 'number'){
            resolve(n1 + n2);
        }else{
            reject('Arguments must be numbers.');
        }
    });
};

addPromise(3, 'a').then(
    (rlt) => {
        console.log(`Ans 1: ${rlt}`);
        return addPromise(rlt, 5);
    },
    (errMsg) => {
        console.log(`Error 1: ${errMsg}`);
    }
).then(
    (rlt) => {
        console.log(`Ans 2: ${rlt}`);
    },
    (errMsg) => {
        console.log(`Error 2: ${errMsg}`);
    }
);