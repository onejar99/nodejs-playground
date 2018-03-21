var addPromise = (n1, n2) => {
    return new Promise((resolve, reject)=>{
        if(typeof n1 === 'number' && typeof n2 === 'number'){
            resolve(n1 + n2);
        }else{
            reject('Arguments must be numbers.');
        }
    });
};

addPromise(3, 7).then(
    (rlt) => {
        console.log(`Ans: ${rlt}`);
    },
    (errMsg) => {
        console.log(`Error: ${errMsg}`);
    }
);
